import requests
from bs4 import BeautifulSoup

wsite = ""

def get():
    r = requests.get(wsite)
    soup = BeautifulSoup(r.text, 'html.parser')
    data = soup.find(id = "_flaskInteractionEnv")
    d = {}
    for i in data.text.split("24q57831"):
        d[i.split("|")[0]] = i.split("|")[1] 
    return d

