# import csv

# def quote_strings_in_csv(input_file, output_file):
#     with open(input_file, 'r', newline='') as infile, open(output_file, 'w', newline='') as outfile:
#         reader = csv.reader(infile)
#         writer = csv.writer(outfile)

#         # Process the header
#         header = next(reader)
#         writer.writerow(header)

#         # Process the data rows
#         for row in reader:
#             quoted_row = [f'"{value}"' if isinstance(value, str) else value for value in row]
#             writer.writerow(quoted_row)

# if __name__ == "__main__":
#     input_csv_file = "static\data_renamed.csv"  # Replace with the path to your input CSV file
#     output_csv_file = "static\output.csv"  # Replace with the desired output file path

#     quote_strings_in_csv(input_csv_file, output_csv_file)
#     print(f'CSV file "{input_csv_file}" has been processed. Quoted strings are saved in "{output_csv_file}".')



import csv

def quote_specific_columns(input_file, output_file, columns_to_quote):
    with open(input_file, 'r', newline='') as infile, open(output_file, 'w', newline='') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)

        # Process the header
        header = next(reader)
        writer.writerow(header)

        # Get indices of columns to be quoted
        indices_to_quote = [header.index(column) for column in columns_to_quote]

        # Process the data rows
        for row in reader:
            quoted_row = ['"' + value + '"' if i in indices_to_quote else value for i, value in enumerate(row)]
            writer.writerow(quoted_row)

if __name__ == "__main__":
    input_csv_file = "static\data_renamed.csv"  # Replace with the path to your input CSV file
    output_csv_file = "static\output.csv"  # Replace with the desired output file path
    columns_to_quote = ["INTERSECTION", "ADDRESS"]

    quote_specific_columns(input_csv_file, output_csv_file, columns_to_quote)
    print(f'CSV file "{input_csv_file}" has been processed. Single-quoted strings are saved in "{output_csv_file}".')
