package com.smarthotelmanager.webapi.model;

import javax.persistence.*;

@Entity
public class BookingProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_bookingprovider")
    private Long id;

    @Column(name="name")
    private String name;

    @ManyToOne(cascade=CascadeType.ALL,fetch = FetchType.EAGER )
    @JoinColumn(name="id_hotel", nullable = true)
    private Hotel hotel;


    public BookingProvider() { }

    public BookingProvider(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }
}
