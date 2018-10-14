package com.smarthotelmanager.webapi.model;

import javax.persistence.*;

@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_hotel")
    private Long id;

    @Column(name="name")
    private String name;
    private String address;
    private Integer numberOfRooms;
    private String  phoneNumner;

    public Hotel() {
    }

    public Hotel(String name, String address, Integer numberOfRooms, String phoneNumner) {
        this.name = name;
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.phoneNumner = phoneNumner;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(Integer numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public String getPhoneNumner() {
        return phoneNumner;
    }

    public void setPhoneNumner(String phoneNumner) {
        this.phoneNumner = phoneNumner;
    }
}
