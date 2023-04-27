from PIL import Image

def crop_image(filename):
  img = Image.open(filename)

  width, height = img.size
  center = (width*0.25, height*0.25, width*0.75, height*0.75)
  img = img.crop(center)
  img.save(filename)