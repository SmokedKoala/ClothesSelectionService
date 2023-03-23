from colorthief import ColorThief

ct = ColorThief("2.png")
pallete = ct.get_palette(color_count=2)

print(pallete)