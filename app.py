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

# Flask Setup
app = Flask(__name__, template_folder = "")
CORS(app)

@app.route('/')
def index():
    dropdown_options = 'year'
    return render_template('templates/index.html', dropdown_options = dropdown_options)


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