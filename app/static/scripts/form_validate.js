function validate(event) 
{

	var validated=true;

	var ml_form=document.getElementById('f');

	if(ml_form['LotArea'].value<0)
	{
		//alert("Area Cannot be Negative");
		ml_form['LotArea'].style.borderColor="red";
		validated=false;
	}

	if(ml_form['YearBuilt'].value<0)
	{
		//alert("Year Cannot be Negative");
		ml_form['YearBuilt'].style.borderColor="red";
		validated=false;
	}

	if(ml_form['1stFlrSF'].value<0)
	{
		//alert("First Floor Area Cannot be Negative");
		ml_form['1stFlrSF'].style.borderColor="red";
		validated=false;
	}

	if(ml_form['2ndFlrSF'].value<0)
	{
		//alert("Second Floor Area Cannot be Negative");
		ml_form['2ndFlrSF'].style.borderColor="red";
		validated=false;
	}
	
	if(ml_form['FullBath'].value<0)
	{
		//alert("Number of Bathrooms cannot be a negative number")
		ml_form['FullBath'].style.borderColor="red";
		validated=false;
	}

	if(ml_form['BedroomAbvGr'].value<0)
	{
		//alert("Number of Bathrooms cannot be a negative number")
		ml_form['BedroomAbvGr'].style.borderColor="red";
		validated=false;
	}

	if(ml_form['TotRmsAbvGrd'].value<0)
	{
		//alert("Number of Rooms Above Ground cannot be a negative number")
		ml_form['TotRmsAbvGrd'].style.borderColor="red";
		validated=false;
	}

	return validated;
}
