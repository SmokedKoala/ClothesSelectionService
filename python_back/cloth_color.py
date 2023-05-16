from colorthief import ColorThief
import colorsys


def get_main_colors(filename):
  ct = ColorThief(filename)
  pallete = ct.get_palette(color_count=2)
  return pallete


def get_main_color(filename):
  ct = ColorThief(filename)
  color = ct.get_color()
  return color


def get_complementary_color(hls):
  return normalise_degrees(hls[0] - 0.5), hls[1], hls[2]


def get_split_complementary_colors(hls):
  return get_colors_by_percents(hls, 0.42)


def get_triad_colors(hls):
  return get_colors_by_percents(hls, 0.33)


def get_tint_colors(hls):
  first = normalise_percents(hls[1] + 0.3)
  second = normalise_percents(hls[1] + 0.6)
  first_color_hex = get_hex_from_hls([hls[0], first, first])
  second_color_hex = get_hex_from_hls([hls[0], second, second])
  return [first_color_hex, second_color_hex]


def get_colors_by_percents(hls, percent):
  first_color_hex = get_hex_from_hls(
      [normalise_degrees(hls[0] - percent), hls[1], hls[2]])
  second_color_hex = get_hex_from_hls(
      [normalise_degrees(hls[0] - 1 + percent), hls[1],
       hls[2]])
  return [first_color_hex, second_color_hex]


def get_hls_from_rgb(rgb):
  return colorsys.rgb_to_hls(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255)


def get_hex_from_hls(hls):
  rgb = [int(x * 255) for x in colorsys.hls_to_rgb(hls[0], hls[1], hls[2])]
  return rgb_to_hex(rgb)


def normalise_degrees(degree):
  if (degree >= 1):
    return degree - 1
  if (degree < 0):
    return degree + 1
  return degree


def normalise_percents(percent):
  if (percent >= 1):
    return percent - 0.9
  if (percent < 0):
    return percent + 0.9
  return percent


def rgb_to_hex(rgb):
  return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])


def hex_to_rgb(hex):
  rgb = []
  for i in (0, 2, 4):
    decimal = int(hex[i:i + 2], 16)
    rgb.append(decimal)

  return tuple(rgb)


color_names = {

}
