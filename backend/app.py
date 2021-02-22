from flask import Flask, request
from flask_cors import CORS
from glob import glob
import six
from google.cloud import translate_v2 as translate
from newspaper import Article
import json

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
  return "Hello, World!"


@app.route('/transtitle')
def get_headline():

  args = request.args
  url = args['url']
  lang = args['lang']

  article = Article(url)
  article.download()
  article.parse()

  return json.dumps({'title': article.title, 'translation': google_trans(article.title, lang)}, ensure_ascii=False)


def google_trans(text, target):

  path = glob('credentials/*.json')[0]
  translate_client = translate.Client.from_service_account_json(path)

  if isinstance(text, six.binary_type):
      text = text.decode("utf-8")

  # Text can also be a sequence of strings, in which case this method
  # will return a sequence of results for each text.
  result = translate_client.translate(text, target_language=target)

  return result["translatedText"]