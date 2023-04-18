from colorthief import ColorThief


def get_main_colors(filename):
  ct = ColorThief(filename)
  pallete = ct.get_palette(color_count=2)
  return pallete


