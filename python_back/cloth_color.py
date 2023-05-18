from colorthief import ColorThief
import color_utils

def get_main_colors(filename):
  ct = ColorThief(filename)
  pallete = ct.get_palette(color_count=2)
  return pallete


def get_main_color(filename):
  ct = ColorThief(filename)
  color_rgb = ct.get_color()
  return color_rgb


def get_complementary_color(hls):
  return normalise_degrees(hls[0] - 0.5), hls[1], hls[2]


def get_split_complementary_colors(hls):
  return get_colors_by_percents(hls, 0.42)


def get_triad_colors(hls):
  return get_colors_by_percents(hls, 0.33)


def get_tint_colors(hls):
  first = normalise_percents(hls[1] + 0.3)
  second = normalise_percents(hls[1] + 0.6)
  first_color_hex = get_specified_color_hex(hls[0], first, first)
  second_color_hex = get_specified_color_hex(hls[0], second, second)
  return [first_color_hex, second_color_hex]


def get_colors_by_percents(hls, percent):
  first_color_hex = get_specified_color_hex(
      normalise_degrees(hls[0] - percent), hls[1], hls[2])
  second_color_hex = get_specified_color_hex(
      normalise_degrees(hls[0] - 1 + percent), hls[1],
      hls[2])
  return [first_color_hex, second_color_hex]


def normalise_degrees(degree):
  if degree >= 1:
    return degree - 1
  if degree < 0:
    return degree + 1
  return degree


def normalise_percents(percent):
  if percent >= 1:
    return percent - 0.9
  if percent < 0:
    return percent + 0.9
  return percent


def get_specified_color_hex(h_old, l_old, s_old):
  h = h_old * 360
  l = l_old * 100
  s = s_old * 100
  if s > 10:
    if 15 <= h < 45:
      if 0 <= l < 33:
        return "#7B3F00"
      elif 33 <= l < 66:
        return "#FF4F00"
      elif 66 <= l < 100:
        return "#FF7F50"
    elif 45 <= h < 75:
      if 0 <= l < 33:
        return "#806B2A"
      elif 33 <= l < 66:
        return "#FFFF00"
      elif 66 <= l < 100:
        return "#FFFF99"
    elif 75 <= h < 105:
      if 0 <= l < 33:
        return "#2A5C03"
      elif 33 <= l < 66:
        return "#F5F5DC"
      elif 66 <= l < 100:
        return "#77DD77"
    elif 105 <= h < 135:
      if 0 <= l < 33:
        return "#006400"
      elif 33 <= l < 66:
        return "#00FF00"
      elif 66 <= l < 100:
        return "#99FF99"
    elif 135 <= h < 165:
      if 0 <= l < 33:
        return "#006633"
      elif 33 <= l < 66:
        return "#00FF7F"
      elif 66 <= l < 100:
        return "#7FFFD4"
    elif 165 <= h < 195:
      if 0 <= l < 33:
        return "#006D5B"
      elif 33 <= l < 66:
        return "#00FFFF"
      elif 66 <= l < 100:
        return "#42AAFF"
    elif 195 <= h < 225:
      if 0 <= l < 33:
        return "#00416A"
      elif 33 <= l < 66:
        return "#008CF0"
      elif 66 <= l < 100:
        return "#7FC7FF"
    elif 225 <= h < 255:
      if 0 <= l < 33:
        return "#000080"
      elif 33 <= l < 66:
        return "#0000FF"
      elif 66 <= l < 100:
        return "#DF73FF"
    elif 255 <= h < 285:
      if 0 <= l < 33:
        return "#310062"
      elif 33 <= l < 66:
        return "#800080"
      elif 66 <= l < 100:
        return "#E0B0FF"
    elif 285 <= h < 315:
      if 0 <= l < 33:
        return "#660066"
      elif 33 <= l < 66:
        return "#FF00FF"
      elif 66 <= l < 100:
        return "#FF77FF"
    elif 315 <= h < 345:
      if 0 <= l < 33:
        return "#6F0035"
      elif 33 <= l < 66:
        return "#FF1493"
      elif 66 <= l < 100:
        return "#FF97BB"
    else:
      if 0 <= l < 33:
        return "#65000B"
      elif 33 <= l < 66:
        return "#FF0000"
      elif 66 <= l < 100:
        return "##FF9BAA"
  else:
    if 0 <= l < 15:
      return "#000000"
    elif 15 <= l < 45:
      return "#464451"
    elif 45 <= l < 66:
      return "#9C9C9C"
    elif 66 <= l < 100:
      return "#FFFFFF"
