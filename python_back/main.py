from flask import Flask, request
import cloth_color
import os
import image_utils

app = Flask(__name__)


@app.route("/api/analyse", methods=['POST'])
def parse_image():
  image_data = {}
  fileName = request.json['file']

  image_utils.crop_image(fileName)
  image_color = cloth_color.get_main_color(fileName)

  image_data["image_color"] = cloth_color.rgb_to_hex(image_color)

  image_color_hls = cloth_color.get_hls_from_rgb(image_color)

  image_data["complementary_color"] = cloth_color.get_hex_from_hls(cloth_color.get_complementary_color(image_color_hls))
  image_data["complet_color"] = []
  image_data["complet_color"].append(cloth_color.get_split_complementary_colors(image_color_hls, 0.42))
  image_data["complet_color"].append(cloth_color.get_split_complementary_colors(image_color_hls, 0.33))
  image_data["complet_color"].append(cloth_color.get_tint_colors(image_color_hls))

  os.remove(fileName)
  return image_data


if __name__ == "__main__":

  app.run(port=6666, host="localhost", debug=True)
