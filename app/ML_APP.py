#Main Flask File Stars Here
import numpy as np
from flask import Flask, request, jsonify, render_template
from joblib import load, dump
import pandas as pd

app = Flask(__name__)

model = load(r'F:\ML App\app\Model\model.pkl')
sample_data = load(r'F:\ML App\app\Model\sample_data.pkl')


@app.route('/')
def hello():
    return "Hello World"


@app.route('/form')
def form():
    return render_template('form.html', my_style="/static/styles/form_style.css",
                           my_script="/static/scripts/form_validate.js")


@app.route('/sample_data_predict')
def sample_predict():
    prediction = model.predict(sample_data)
    output = prediction[0]
    return render_template('result.html',price=output)


@app.route("/predict", methods=['POST'])
def predict():
    data = request.form.to_dict()
    prediction = model.predict(pd.DataFrame.from_dict([data]))
    print(prediction)
    output = prediction[0]
    #return jsonify({"SalePrice": output})
    return render_template('result.html', price=output)

if __name__ == '__main__':
    app.run(debug=True)