import unittest
from PIL import Image
import os

import main
from cloth_classificator import get_cloth_class
from image_utils import crop_image


class MyTestCase(unittest.TestCase):

  @classmethod
  def setUpClass(cls):
    image = Image.open("tshirt.jpg")
    image_copy = image.copy()
    image_copy.save("test.jpg")

  @classmethod
  def tearDownClass(cls):
    os.remove("test.jpg")

  def test_image_size_after_crop(self):
    original_image = Image.open("test.jpg")
    original_height, original_width = original_image.size

    crop_image("test.jpg")

    new_image = Image.open("test.jpg")
    height, width = new_image.size
    self.assertEqual(round(original_height / 2) + 1, height)
    self.assertEqual(round(original_width / 2) + 1, width)

  def test_cloth_classification(self):
    result = get_cloth_class("test.jpg")
    self.assertEqual(12, result)


if __name__ == '__main__':
  unittest.main()
