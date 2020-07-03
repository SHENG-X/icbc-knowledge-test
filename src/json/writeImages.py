'''
    process json file to find questions with images and download images
'''
import json
import requests
import os

domain = 'https://practicetest.icbc.com/'
dataFiles = ['./signs.json', './rules.json']

for fileName in dataFiles:
  with open(fileName) as d:
    data = json.load(d)
    for d in data:
      try:
        imagePath = d['image']['_file']
        if imagePath != '':
          downloadPath = domain + imagePath
          img_data = requests.get(downloadPath).content
          if not os.path.exists('../images/opkt'):
            os.makedirs('../images/opkt')
          if not os.path.exists('../images/signs'):
            os.makedirs('../images/signs')
          with open('../'+imagePath, 'wb') as handler:
            handler.write(img_data)
      except:
        pass