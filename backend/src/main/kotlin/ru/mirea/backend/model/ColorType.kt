package ru.mirea.backend.model

enum class ColorType(val rus: String, val hex: String) {

    Cinnamon("Коричный", "#7B3F00"),
    Orange("Оранжевый", "#FF4F00"),
    Coral("Коралловый", "#FF7F50"),
    Khaki("Хаки", "#806B2A"),
    Yellow("Желтый", "#FFFF00"),
    Pale_yellow("Бледно-желтый", "#FFFF99"),
    Green("Зеленый", "#2A5C03"),
    Beige("Бежевый", "#F5F5DC"),
    Pastel_green("Пастельно-зеленый", "#77DD77"),
    Herbal("Травяной", "#006400"),
    Lime("Лайм", "#00FF00"),
    Light_green("Салатовый", "#99FF99"),
    Spring_Green("Весенне-зеленый", "#00FF7F"),
    University_Of_Michigan_Green("Зеленый Мичиганского университета", "#006633"),
    Aquamarine("Аквамариновый", "#7FFFD4"),
    Bluish_Green("Синевато-зеленый", "#006D5B"),
    Celadon("Цвет морской волны", "#00FFFF"),
    Blue("Голубой", "#42AAFF"),
    Dead_Indigo("Мертвенный индиго", "#00416A"),
    Sea_Green("Цвет морской волны", "#008CF0"),
    Heavenly("Небесный", "#7FC7FF"),
    Navi("Темно-синий", "#000080"),
    Navi_BLue("Синий", "#0000FF"),
    Heliotrope("Гелиотроп", "#DF73FF"),
    Dark_Indigo("Темный индиго", "#310062"),
    Purple("Пурпурный", "#800080"),
    Bright_Lilac("Ярко-сиреневый", "#E0B0FF"),
    Plum("Сливовый", "#660066"),
    Fuchsia("Фуксия", "#FF00FF"),
    Pink_Fuchsia("Розовая фуксия", "#FF77FF"),
    Pink("Розовый", "#FF1493"),
    Purplish_Pink("Пурпурно-розовый", "#FF97BB"),
    Burgundy("Бордовый", "#9B2D30"),
    Brown("Коричневый", "#65000B"),
    Red("Красный", "#FF0000"),
    Salmon_Crayola("Лососевый Крайола", "##FF9BAA"),
    Black("Черный", "#000000"),
    Anthracite("Антрацит", "#464451"),
    Grey("Серый", "#9C9C9C"),
    White("Белый", "#FFFFFF");

    companion object {
        fun findHexByRus(rus: String): String  = values().first { it.rus == rus }.hex

    }
}