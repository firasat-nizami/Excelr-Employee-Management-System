package com.excelr.employee_management_system.dto;

import java.time.LocalDate;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

public class EmployeeDto {
	
	@NotBlank(message = "Full name is required")
    private String fullName;

    @NotNull(message = "Date of Birth is required")
    private LocalDate dob;

    @NotBlank(message = "Gender is required")
    private String gender;

    @NotNull(message = "Age is required")
    @Positive(message = "Age must be positive")
    @Max(value = 999, message = "Age cannot exceed 3 digits")
    private Integer age;

    @NotBlank(message = "Employment Code is required")
    @Pattern(regexp = "\\d{6}", message = "Employment Code must be a 6-digit number")
    private String employmentCode;

    @NotBlank(message = "Mobile number is required")
    @Pattern(regexp = "\\d{10}", message = "Mobile number must be 10 digits")
    private String mobile;

    @NotBlank(message = "Personal email is required")
    @Email(message = "Invalid personal email format")
    private String personalMail;

    @NotBlank(message = "Company email is required")
    @Email(message = "Invalid company email format")
    private String companyMail;

    @NotBlank(message = "Emergency contact name is required")
    private String emergencyContactName;

    @NotBlank(message = "Emergency mobile is required")
    @Pattern(regexp = "\\d{10}", message = "Emergency mobile must be 10 digits")
    private String emergencyMobile;

    @Valid
    @NotNull(message = "Current address is required")
    private AddressDto currentAddress;

    @Valid
    @NotNull(message = "Permanent address is required")
    private AddressDto permanentAddress;
    
    private String password;
    
    public EmployeeDto() {
		// TODO Auto-generated constructor stub
	}
    
    

	public EmployeeDto(@NotBlank(message = "Full name is required") String fullName,
			@NotNull(message = "Date of Birth is required") LocalDate dob,
			@NotBlank(message = "Gender is required") String gender,
			@NotNull(message = "Age is required") @Positive(message = "Age must be positive") @Max(value = 999, message = "Age cannot exceed 3 digits") Integer age,
			@NotBlank(message = "Employment Code is required") @Pattern(regexp = "\\d{6}", message = "Employment Code must be a 6-digit number") String employmentCode,
			@NotBlank(message = "Mobile number is required") @Pattern(regexp = "\\d{10}", message = "Mobile number must be 10 digits") String mobile,
			@NotBlank(message = "Personal email is required") @Email(message = "Invalid personal email format") String personalMail,
			@NotBlank(message = "Company email is required") @Email(message = "Invalid company email format") String companyMail,
			@NotBlank(message = "Emergency contact name is required") String emergencyContactName,
			@NotBlank(message = "Emergency mobile is required") @Pattern(regexp = "\\d{10}", message = "Emergency mobile must be 10 digits") String emergencyMobile,
			@Valid @NotNull(message = "Current address is required") AddressDto currentAddress,
			@Valid @NotNull(message = "Permanent address is required") AddressDto permanentAddress) {
		super();
		this.fullName = fullName;
		this.dob = dob;
		this.gender = gender;
		this.age = age;
		this.employmentCode = employmentCode;
		this.mobile = mobile;
		this.personalMail = personalMail;
		this.companyMail = companyMail;
		this.emergencyContactName = emergencyContactName;
		this.emergencyMobile = emergencyMobile;
		this.currentAddress = currentAddress;
		this.permanentAddress = permanentAddress;
		this.password = password;
	}



	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getEmploymentCode() {
		return employmentCode;
	}

	public void setEmploymentCode(String employmentCode) {
		this.employmentCode = employmentCode;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPersonalMail() {
		return personalMail;
	}

	public void setPersonalMail(String personalMail) {
		this.personalMail = personalMail;
	}

	public String getCompanyMail() {
		return companyMail;
	}

	public void setCompanyMail(String companyMail) {
		this.companyMail = companyMail;
	}

	public String getEmergencyContactName() {
		return emergencyContactName;
	}

	public void setEmergencyContactName(String emergencyContactName) {
		this.emergencyContactName = emergencyContactName;
	}

	public String getEmergencyMobile() {
		return emergencyMobile;
	}

	public void setEmergencyMobile(String emergencyMobile) {
		this.emergencyMobile = emergencyMobile;
	}

	public AddressDto getCurrentAddress() {
		return currentAddress;
	}

	public void setCurrentAddress(AddressDto currentAddress) {
		this.currentAddress = currentAddress;
	}

	public AddressDto getPermanentAddress() {
		return permanentAddress;
	}

	public void setPermanentAddress(AddressDto permanentAddress) {
		this.permanentAddress = permanentAddress;
	}



	@Override
	public String toString() {
		return "EmployeeDto [fullName=" + fullName + ", dob=" + dob + ", gender=" + gender + ", age=" + age
				+ ", employmentCode=" + employmentCode + ", mobile=" + mobile + ", personalMail=" + personalMail
				+ ", companyMail=" + companyMail + ", emergencyContactName=" + emergencyContactName
				+ ", emergencyMobile=" + emergencyMobile + ", currentAddress=" + currentAddress + ", permanentAddress="
				+ permanentAddress + "]";
	}
    
    
    
    


}
