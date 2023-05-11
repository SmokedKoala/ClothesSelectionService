package ru.mirea.backend.model

import jakarta.persistence.*

@Entity
@Table(name = "cloth")
open class Cloth(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    open var id: Long? = null,

    @Column(nullable = false)
    open var shop: String? = null,

    @Column(nullable = false)
    open var type: String? = null,

    @Column(nullable = false)
    open var name: String? = null,

    @Column(nullable = false)
    open var imageSrc: String? = null,

    @Column(nullable = false)
    open var url: String? = null,

    @Column(nullable = false)
    open var price: String? = null,

    @Column(nullable = false)
    open var color: String? = null
)
