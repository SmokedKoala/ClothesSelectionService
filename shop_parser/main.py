import requests
from bs4 import BeautifulSoup
import csv

# href: Array.from(document.querySelectorAll("a.lazy-image.product-name")).map(el => el.href)
# names: Array.from(document.querySelectorAll("a.lazy-image.product-name")).map(el => el.title)
# images src: Array.from(document.querySelectorAll("a.lazy-image.product-name img:first-child")).map(el => el.src)
# price Array.from(document.querySelectorAll("span.product-price, span.product-new-price")).map(el => el.innerText.replace(' ₽', '').slice(0, -3).replace(' ', ''))


clothesSrc = [
]
clothesNames = [
]
oneImagePerClothesSrc = [
    ]
clothesPricesNums = [
]

def parse_site(url):
    request = requests.get(url)
    with open('shop_parser/temp.html', 'w', encoding="utf-8") as output_file:
        output_file.write(request.text)
    return 'shop_parser/temp.html'


def read_file(filename):
    with open(filename, encoding="utf-8") as input_file:
        text = input_file.read()
    return text


def get_data_from_html(filename):
    text = read_file(filename)
    soup = BeautifulSoup(text, "html.parser")

    item_list = soup.findAll('table', {'class': 'table table-condensed'})
    # colins tshirt, shirt, pullover, shorts
    return(item_list[0].text.replace('\n','').split()[-1])
    # colins trousers
    # return(item_list[0].text.replace('\n','').split()[-4])


if __name__ == "__main__":
    # header = ['shop', 'type','name', 'image_src', 'src', 'price', 'color']
    data = []
    for i in range(len(clothesSrc)):
        filename = parse_site(clothesSrc[i])
        color = get_data_from_html(filename)
        data.append(['COLIN\'S', 'shorts', clothesNames[i], oneImagePerClothesSrc[0], clothesSrc[i], clothesPricesNums[i], color])
    # print(data)
    with open('shop_parser/data.csv', 'a', encoding='UTF8', newline='') as f:
        writer = csv.writer(f)
        # writer.writerow(header)
        writer.writerows(data)

