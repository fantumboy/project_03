# THIS IS OUR PROJECT 3 app.py !!

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template
from flask_cors import CORS

engine = create_engine("postgresql+psycopg2://postgres:postgres@localhost:5433/project_03")

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
raw_data = Base.classes
print (raw_data)
print (raw_data.keys())

table = Base.classes.yearmonth
print (table)

# Flask Setup
app = Flask(__name__, template_folder = "")
CORS(app)


@app.route('/')
def index():
    dropdown_options = 'year'
    return render_template('/templates/index.html', dropdown_options = dropdown_options)


@app.route('/year/<year>')
def y(year):
    session = Session(engine)

    results = [x.__dict__ for x in session.query(table).filter(table.year == int(year))]
    for result in results:
        del result['_sa_instance_state']
    session.close()

    return jsonify(results)


@app.route('/yeartotal/')
def ytotal():
    session = Session(engine)

    results = [x for x in session.query(table.year, func.sum(table.violations)).group_by(table.year).all()]
    print (results)
    session.close()
    d = []
    for x in results: 
        print(x)
        e = {}
        e["year"] = x[0]
        e["total"] = x[1]
        d.append(e)
    print(d)
    return jsonify(d)


@app.route('/all')
def everything():
    session = Session(engine)

    results = [x.__dict__ for x in session.query(table)]
    for result in results:
        del result['_sa_instance_state']
    session.close()
    return jsonify(results)


@app.route('/month/<month>')
def m(month):
    session = Session(engine)

    results = [x.__dict__ for x in session.query(table).filter(table.month == int(month))]
    for result in results:
        del result['_sa_instance_state']
    session.close()
    return jsonify(results)


@app.route('/heatmapData')
def hmd():
    session = Session(engine)

    # results = [x for x in session.query(table.camera_id, table.latitude, table.longitude, func.sum(table.violations)).group_by(table.camera_id).all()]
    results = [x for x in session.query(table.camera_id, table.latitude, table.longitude, table.violations).group_by(table.camera_id, table.latitude, table.longitude).all()]
    print (results)
    session.close()
    heatmapData = []
    for x in results: 
        print(x)
        dataPull = {}
        dataPull["camera_id"] = x[0]
        dataPull["latitude"] = x[1]
        dataPull["longitude"] = x[2]
        dataPull["totalViolations"] = x[3]
        heatmapData.append(dataPull)
    print(heatmapData)

    return jsonify(heatmapData)
# *** LINK FLASK APP TO JS?? HOW??*** LOOK INTO LESSON 14, 15
# *** static folder should have css and js
# *** templates folder should have html
# *** jquery to ajax to flask
# *** look up jquery to flask


# @app.route('/submit', methods=['POST'])
# def submit():
#     selected_option = request.form['dropdown']
#     return f"Selected option: {selected_option}"


# # Flask Routes
# @app.route("/")
# def welcome():
#     """List all available api routes."""
#     return (
#         f"Available Routes:<br/>"
#         f"/api/v1.0/names<br/>"
#         f"/api/v1.0/passengers"
#     )

# @app.route("/api/v1.0/names")
# def names():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of all passenger names"""
#     # Query all passengers
#     results = session.query(Passenger.name).all()

#     session.close()

#     # Convert list of tuples into normal list
#     all_names = list(np.ravel(results))

#     return jsonify(all_names)


if __name__ == '__main__':
    app.run(debug=True)