package com.excelr.employee_management_system.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Employee {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 6, unique = true, nullable = false)
    private String employmentCode;

    private String fullName;

    private LocalDate dob;

    private String gender;

    private Integer age;

    private String personalMail;

    private String companyMail;

    @Column(length = 10)
    private String mobile;

    private String emergencyContactName;

    @Column(length = 10)
    private String emergencyMobile;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "current_address_id")
    private Address currentAddress;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "permanent_address_id")
    private Address permanentAddress;
    
    private String password;
    
    public String roles;
    
    public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(Long id, String employmentCode, String fullName, LocalDate dob, String gender, Integer age,
			String personalMail, String companyMail, String mobile, String emergencyContactName, String emergencyMobile,
			Address currentAddress, Address permanentAddress, String password) {
		super();
		this.id = id;
		this.employmentCode = employmentCode;
		this.fullName = fullName;
		this.dob = dob;
		this.gender = gender;
		this.age = age;
		this.personalMail = personalMail;
		this.companyMail = companyMail;
		this.mobile = mobile;
		this.emergencyContactName = emergencyContactName;
		this.emergencyMobile = emergencyMobile;
		this.currentAddress = currentAddress;
		this.permanentAddress = permanentAddress;
		this.password = password;
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmploymentCode() {
		return employmentCode;
	}

	public void setEmploymentCode(String employmentCode) {
		this.employmentCode = employmentCode;
	}
	
	public String getRoles() {
		return roles;
	}



	public void setRoles(String roles) {
		this.roles = roles;
	}


	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
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

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
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

	public Address getCurrentAddress() {
		return currentAddress;
	}

	public void setCurrentAddress(Address currentAddress) {
		this.currentAddress = currentAddress;
	}

	public Address getPermanentAddress() {
		return permanentAddress;
	}

	public void setPermanentAddress(Address permanentAddress) {
		this.permanentAddress = permanentAddress;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", employmentCode=" + employmentCode + ", fullName=" + fullName + ", dob=" + dob
				+ ", gender=" + gender + ", age=" + age + ", personalMail=" + personalMail + ", companyMail="
				+ companyMail + ", mobile=" + mobile + ", emergencyContactName=" + emergencyContactName
				+ ", emergencyMobile=" + emergencyMobile + ", currentAddress=" + currentAddress + ", permanentAddress="
				+ permanentAddress + ", password=" + password + "]";
	}
    
    

	
	
}
