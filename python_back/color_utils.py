import colorsys


def rgb_to_hex(rgb):
  return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])


def hex_to_rgb(hex):
  rgb = []
  for i in (0, 2, 4):
    decimal = tuple(int(hex[i:i+2], 16) for i in (0, 2, 4))
    rgb.append(decimal)

  return tuple(rgb)


def hls_to_hex(hls):
  rgb = [int(x * 255) for x in colorsys.hls_to_rgb(hls[0], hls[1], hls[2])]
  return rgb_to_hex(rgb)


def rgb_to_hls(rgb):
  return colorsys.rgb_to_hls(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255)
