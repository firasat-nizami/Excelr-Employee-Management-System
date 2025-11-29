package com.excelr.employee_management_system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Address {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String city;

	    private String addressLine1;

	    private String addressLine2;

	    private String pincode;
	    
		public Address() {
			// TODO Auto-generated constructor stub
		}

		public Address(Long id, String city, String addressLine1, String addressLine2, String pincode) {
			super();
			this.id = id;
			this.city = city;
			this.addressLine1 = addressLine1;
			this.addressLine2 = addressLine2;
			this.pincode = pincode;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getCity() {
			return city;
		}

		public void setCity(String city) {
			this.city = city;
		}

		public String getAddressLine1() {
			return addressLine1;
		}

		public void setAddressLine1(String addressLine1) {
			this.addressLine1 = addressLine1;
		}

		public String getAddressLine2() {
			return addressLine2;
		}

		public void setAddressLine2(String addressLine2) {
			this.addressLine2 = addressLine2;
		}

		public String getPincode() {
			return pincode;
		}

		public void setPincode(String pincode) {
			this.pincode = pincode;
		}

		@Override
		public String toString() {
			return "Address [id=" + id + ", city=" + city + ", addressLine1=" + addressLine1 + ", addressLine2="
					+ addressLine2 + ", pincode=" + pincode + "]";
		}
		
		

	
	

}
