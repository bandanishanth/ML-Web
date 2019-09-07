import requests
from joblib import load,dump
url = 'http://localhost:5000/sample_predict'
data = load(r'F:\ML App\app\Model\sample_data.pkl')
#json={'LotArea':10084,'YearBuilt':2004,'1stFlrSF':1694,'2ndFlrSF':0,'FullBath':2,'BedroomAbvGr':3,'TotRmsAbvGrd':7}
r = requests.post(url)
print(r.json())
#print(data)