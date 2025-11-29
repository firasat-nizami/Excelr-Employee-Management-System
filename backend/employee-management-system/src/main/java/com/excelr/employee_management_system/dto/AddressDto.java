package com.excelr.employee_management_system.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class AddressDto {
	
	@NotBlank(message = "City is required")
    private String city;

    @NotBlank(message = "Address Line 1 is required")
    private String addressLine1;

    private String addressLine2; // optional

    @NotBlank(message = "Pincode is required")
    @Pattern(regexp = "\\d{6}", message = "Pincode must be a 6-digit number")
    private String pincode;
    
    public AddressDto() {
		// TODO Auto-generated constructor stub
	}

	public AddressDto(@NotBlank(message = "City is required") String city,
			@NotBlank(message = "Address Line 1 is required") String addressLine1, String addressLine2,
			@NotBlank(message = "Pincode is required") @Pattern(regexp = "\\d{6}", message = "Pincode must be a 6-digit number") String pincode) {
		super();
		this.city = city;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.pincode = pincode;
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
		return "AddressDto [city=" + city + ", addressLine1=" + addressLine1 + ", addressLine2=" + addressLine2
				+ ", pincode=" + pincode + "]";
	}
    
    

}
