import base64
import io
import logging

from flask import Flask, render_template, request
from wordcloud import WordCloud

app = Flask(__name__, template_folder="D:\Python\word_cloud\\frontend\dist", static_folder="D:\Python\word_cloud\\frontend\dist\static")

# 真正调用词云库生成图片
def get_word_cloud(text):

    if text != "":
        pil_img = WordCloud(width=800, height=300, background_color="white",font_path='msyh.ttc').generate(text=text).to_image()
        img = io.BytesIO()
        pil_img.save(img, "PNG")
        img.seek(0)
        img_base64 = base64.b64encode(img.getvalue()).decode()
        return img_base64
    else:
        return {"code":1001, "msg":"云词内容不能为空,请输入内容!"}


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


@app.route('/word/cloud/generate',methods=["POST"])
def cloud():
    text = request.json.get("word")
    res = get_word_cloud(text)
    logging.info(f"输入的词：{text}")
    return res



if __name__ == "__main__":
    app.run(debug=True)