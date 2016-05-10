var appData = {};
appData.airportTypes = [{name : 'Civil Airports', slug : 'civil'}, {name : 'Military Airports', slug : 'military'}, {name : 'Sea Plane Base', slug : 'sea_plane'}, {name : 'Harbours', slug : 'harbours'} ]
appData.filters = [{name : 'Name', slug : 'name'}, {name : 'Elevation', slug : 'elevation'}, {name : 'Direct Flight', slug : 'direct_flight'}, {name : 'Rating', slug : 'rating'}];
appData.airports = [];
appData.page = 2;
appData.filter = 'name';
appData.loadmore = true;

var flagData = {
    "AD": "Andorra",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AO": "Angola",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "\u00c5land Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BN": "Brunei Darussalam",
    "BO": "Bolivia, Plurinational State of",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos (Keeling) Islands",
    "CD": "Congo, the Democratic Republic of the",
    "CF": "Central African Republic",
    "CG": "Congo",
    "CH": "Switzerland",
    "CI": "C\u00f4te d'Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CW": "Cura\u00e7ao",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands (Malvinas)",
    "FM": "Micronesia, Federated States of",
    "FO": "Faroe Islands",
    "FR": "France",
    "GA": "Gabon",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GS": "South Georgia and the South Sandwich Islands",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran, Islamic Republic of",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "Saint Kitts and Nevis",
    "KP": "Korea, Democratic People's Republic of",
    "KR": "Korea, Republic of",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Lao People's Democratic Republic",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova, Republic of",
    "ME": "Montenegro",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MK": "Macedonia, the former Yugoslav Republic of",
    "ML": "Mali",
    "MM": "Myanmar",
    "MN": "Mongolia",
    "MO": "Macao",
    "MP": "Northern Mariana Islands",
    "MZ": "Martinique",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PS": "Palestine",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PN": "Pitcairn",
    "PR": "Puerto Rico",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RE": "Réunion",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "SI": "Slovenia",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SV": "El Salvador",
    "SX": "Sint Maarten (Dutch part)",
    "SY": "Syrian Arab Republic",
    "SZ": "Swaziland",
    "TC": "Turks and Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor-Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TZ": "Tanzania, United Republic of",
    "TW": "Taiwan, Province of China",
    "UA": "Ukraine",
    "UG": "Uganda",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Holy See (Vatican City State)",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela, Bolivarian Republic of",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "VN": "Viet Nam",
    "VU": "Vanuatu",
    "WS": "Samoa",
    "YE": "Yemen",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
};


var RatingStar = React.createClass({
    render : function(){
 
      var stareClass = ''
      if(this.props.data >= 1)
        stareClass = 'star';
      else if(this.props.data > 0)
        stareClass = 'start_half';
      else
        stareClass = 'start_border';

      return (
          <i className="material-icons yellow-text accent-3">{stareClass}</i>
        );
    }
});

var Airport = React.createClass({
    getFlag : function(){
      if(this.props.data.country && this.props.data.country != '')
      {
        var code = Object.keys(flagData).filter(function(key) {return flagData[key] === this.props.data.country}.bind(this))[0];
        if(code)
          return "flag-png250px/"+code.toLowerCase()+".png";
        else
          return "http://images.all-free-download.com/images/graphiclarge/airport_sign_199032.jpg";
      }
      else
        return "http://images.all-free-download.com/images/graphiclarge/airport_sign_199032.jpg";
    },

    getName : function(){
      if(this.props.data.name)
        return this.props.data.name;
      if(this.props.data.city)
        return this.props.data.city+" Airport";
      if(this.props.data.state)
        return this.props.data.state+" Airport";
      return "Airport";

    },

    getElevation : function(){
      if(this.props.data.elev && this.props.data.elev != 0)
        return this.props.data.elev+" ft";
      return 'NA'
    },

    getRatingStars : function(){
      var starRatings = [];

      for(var i = this.props.data.rating; i>0; i--)
      {
        starRatings.push(<RatingStar data={i} />);
      }
      return starRatings;
    },

    render : function(){
      return (
          <li className="collection-item avatar">
            <img src={this.getFlag()} alt="" className="circle" />
            <span className="title">{this.getName()}</span>
            <div className="right sub-box-display">
            <ul>
            <li className="info-sub truncate">
              <i className="material-icons">place</i> {this.props.data.city+", " || ''} {this.props.data.state || ''}
            </li>
            <li className="info-sub truncate">
              <i className="material-icons">near_me</i> Elevation: {this.getElevation()}
            </li>
            <li className="info-sub truncate">
              <i className="material-icons">flight</i>Direct Flight: {this.props.data.direct_flights || 'N/A'}
            </li>
            </ul>
            </div>
            <p>
              {this.getRatingStars()}
            </p>
          </li>
        );
    }
});


var AirportList = React.createClass({
  componentDidMount: function() {

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height() && this.props.loadmore) {
           this.props.onNewPageLoad();
       }
    }.bind(this));

    },
  render : function(){
    var airportsArr = this.props.data.map(function (dt){
      return <Airport data={dt} />
    });

    return (
        <ul className="collection">
          
          {airportsArr}

          <li className="collection-item avatar load-more">
          <p className="center-align">Loading More...</p>
              <div className="progress">
                  <div className="indeterminate"></div>
              </div>
          </li>

        </ul>
      );
  }

})


var SearchForm = React.createClass({

  searchAirport : function(e){
    this.props.initSearch(e.target.value);    
  },

  render : function(){
    return (
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input id="icon_prefix" onKeyUp={this.searchAirport} type="text" className="validate" />
              <label htmlFor="icon_prefix">Search (by name, code or country)</label>
            </div>
          </div>
        </form>
      );
  }
});



var SortOption = React.createClass({

  sortClick : function(e){
    this.props.sortChanged(e.target.value)
  },


  render : function(){

    return (
        <li className="collection-item">
          <input name="group2" onChange={this.sortClick} value={this.props.data.slug} type="radio" id={this.props.data.slug} />
          <label htmlFor={this.props.data.slug}>{this.props.data.name}</label>
        </li>      
      );
  }
});

var SortFilters = React.createClass({

  componentDidMount: function() {
      $("#"+this.props.data[0].slug).prop('checked', true);
    },

  render : function(){

    var optionArr = this.props.data.map(function (dt){
      return <SortOption data={dt} sortChanged={this.props.sortFilterChanged} />
    }.bind(this));

    return (
        <ul className="collection with-header">
          <li className="collection-header"><i className="material-icons">sort</i><span className="list-heading">Sort By</span></li>
            {optionArr}
        </ul>
      );
  }
});


var AirportOption = React.createClass({
  render : function(){
    return (

      <li className="collection-item">
        <input name="group1" type="radio" id={this.props.data.slug} />
        <label htmlFor={this.props.data.slug}>{this.props.data.name}</label>
      </li>

      );
  }
});


var AirportType = React.createClass({
  
  componentDidMount: function() {
      $("#"+this.props.data[0].slug).prop('checked', true);
    },

  render : function(){

    var listArr = this.props.data.map(function (dt){
      return (
          <AirportOption data={dt} />
        );
    });


    return (
        <ul className="collection with-header">
          <li className="collection-header"><i className="material-icons">list</i><span className="list-heading">Type</span></li>
          {listArr}
        </ul>
      );
  }

});


var Appbody = React.createClass({

  onInitSearch : function(value){

    if(value == ''){
      var tmp = this.props.data;
      tmp.loadmore = true;
      tmp.airports = [];
      this.setState({data : tmp});
      this.loadPage();
      $(".load-more").show();
    }else if(value.length >= 3){
      $.get('/list-search?search='+value, function(data) {

        var tmp = this.props.data;
        tmp.page = 1;
        tmp.loadmore = false;
        tmp.airports = [];
        data.map(function(dt){
          tmp.airports.push(dt);
        })
        this.setState({data : tmp});
        $(".load-more").hide();
      }.bind(this));
    }
  },

  loadPage : function(){
    $.get('/list?filter='+this.props.data.filter+'&page='+this.props.data.page, function(data) {

      var tmp = this.props.data;
      tmp.page += 1;
      data.map(function(dt){
        tmp.airports.push(dt);
      })
      this.setState({data : tmp})
    }.bind(this));
  },

  changeFilter : function(dt){
    var tmp = this.props.data;
    tmp.filter = dt;
    tmp.page = 1;
    tmp.airports = [];
    this.setState({data : tmp});
    this.loadPage();
  },

  componentDidMount: function() {
    $('.fixit').pushpin({ top: $('.fixit').offset().top });

    $.get('/list?filter=name&page=1', function(data) {
      var tmp = this.props.data;
      tmp.airports = data;
      this.setState({data : tmp})

    }.bind(this));

    },

  render: function() {
    return (
      <div className="row">
        <div className="col s4 fixit">
          
          <AirportType data={this.props.data.airportTypes} />

          <SortFilters data={this.props.data.filters} sortFilterChanged={this.changeFilter} />

        </div>
        <div className="col s8 scroll-it">
          <div className="row">

              <SearchForm initSearch={this.onInitSearch} />
              <AirportList loadmore={this.props.data.loadmore} data={this.props.data.airports} onNewPageLoad={this.loadPage} />
            </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Appbody data={appData} />,
  document.getElementById('app-container')
);