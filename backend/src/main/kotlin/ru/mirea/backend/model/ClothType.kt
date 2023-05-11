package ru.mirea.backend.model

enum class ClothType(val rus: String, val src: String) {
    trousers("Штаны", "https://www.fjallraven.com/4afe53/globalassets/catalogs/fjallraven/f8/f866/f86666/f534/vardag_trousers_m_86666-534_a_main_fjr.jpg?width=680&height=680&mode=BoxPad&bgcolor=fff&quality=80"),
    shirt("Рубашка", "https://www.rei.com/media/99379e7b-0e32-47dd-b3ff-6366acbf241c.jpg?size=576x768"),
    pullover("Толстовка", "https://www.independenttradingco.com/cdn/shop/products/SS4500P-ARM_98a4ad90-fd97-4382-af53-5c07e18a340c_2048x.jpg?v=1650996949"),
    tshirt("Футболка", "https://cdn11.bigcommerce.com/s-405b0/images/stencil/590x590/products/97/18030/gildan-8000-tee-t-shirt.ca-red__23823.1653069825.jpg?c=2"),
    shorts("Шорты", "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/433109/sub/goods_433109_sub13.jpg?width=750");


    companion object {
        fun getData(enumElementName: String): Pair<String, String> {
            val enumElement = valueOf(enumElementName)
            return Pair(enumElement.rus, enumElement.src)
        }
    }
}