from flask import Flask, request
import cloth_color
import os

import color_utils
import image_utils
import cloth_classificator

app = Flask(__name__)


@app.route("/api/analyse", methods=['POST'])
def parse_image():
  image_data = {}
  fileName = request.json['file']

  image_data["cloth"] = str(cloth_classificator.get_cloth_class(fileName))

  image_utils.crop_image(fileName)
  image_color = cloth_color.get_main_color(fileName)

  color_hls = color_utils.rgb_to_hls(image_color)
  image_data["imageColor"] = cloth_color.get_specified_color_hex(color_hls[0],
                                                                 color_hls[1],
                                                                 color_hls[2])

  image_data["setCloth"] = [["1", "2"], ["3", "4"], ["5", "6"]]

  image_color_hls = color_utils.rgb_to_hls(image_color)

  # image_data["complementary_color"] = cloth_color.get_hex_from_hls(
  #   cloth_color.get_complementary_color(image_color_hls))
  image_data["setColors"] = []
  image_data["setColors"].append(
      cloth_color.get_split_complementary_colors(image_color_hls))
  image_data["setColors"].append(
      cloth_color.get_triad_colors(image_color_hls))
  image_data["setColors"].append(
      cloth_color.get_tint_colors(image_color_hls))

  os.remove(fileName)
  return image_data


if __name__ == "__main__":
  app.run(port=6666, host="localhost", debug=True)
