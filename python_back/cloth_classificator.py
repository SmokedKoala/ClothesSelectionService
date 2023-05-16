from tensorflow.keras.models import load_model
import cv2
import numpy as np
import tensorflow as tf


def get_cloth_class(path):
  img = cv2.imread(path)
  resize = tf.image.resize(img, (256, 256))
  model = load_model(
    'C:/Users/user/Desktop/java/ClothesSelectionService/python_back/imageclassifier.h5')
  result = model.predict(np.expand_dims(resize / 255, 0))
  return np.argmax(result)
