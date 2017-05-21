var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var data = [{
	"name": "SP-20086219-01-01",
	"created": "2016-05-05T00:00:00Z",
	"version": 1.0,
	"requirements": [{
		"identifier": "1",
		"title": "General description",
		"description": 'This document details the specifications and operation of the COMET AG automatic impedance matching network part number 20086219. This part is an application specific 430kHz matching network designed for the Novellus Systems VECTOR LF matching requirements.\n\nThe RF section employs a pi style impedance transformation network. It is designed to drive a wide range of impedances. See 3.1.6 for tuning diagram.\n\nThe matching network may be operated in a “stand-alone” mode, controlled via the analog interface, or controlled via an RS-232 control from the system. Available modes of operation include “Manual Mode”, “Auto-Tune / Preset Mode”, and “Auto-Tune / Hold Mode”. Auto-tuning is accomplished through use of the Phase and Magnitude error signals. Error signal control method, loop gain, motor speed versus error amplitude and amplitude settling window are all configurable software settings. Manual capacitor positions and preset capacitor positions can be entered through the analog interface or the RS-232 control.\n\nA number of serial commands are implemented in the firmware of the match which the customer can directly send from his system to the match via the RS-232 interface. Full details of the serial command set can be found in [3]',
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "2",
		"title": "Design and document control",
		"description": "The matching network and this document are under strict revision control. No changes will be allowed to the design without prior notification and approval. This document may be revised as more data or information becomes available. Any changes to this document will be detailed as a revision change and will be provided to the customer in a timely manner.",
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3",
		"title": "Specifications",
		"description": "",
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1",
		"title": "RF Power and Tuning",
		"description": "",
		"assigned_to": "Sidthi Sanjanwala",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1.1",
		"title": "Frequency of operation",
		"description": "Frequency of operation is 430 kHz +/- 1.0%.",
		"assigned_to": "Sidthi Sanjanwala",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1.2",
		"title": "RF input power range",
		"description": "The RF input power range is 100 Watts to 6,000 Watts CW.\n\nFor load impedances below 40Ω, the power has to be reduced in order to avoid damage to the match (see section 3.1.8 for details).",
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1.3",
		"title": "RF input connector",
		"description": "The RF input connector is a straight Type “7/16” female with a QC base.",
		"assigned_to": "Sidthi Sanjanwala",
		"status": "pending",
		"tag": "inbox",
	}]
}];

/* App */
class App extends React.Component {
	constructor(args) {
		super(args);

		// Assign unique IDs to the requirements
		const project = this.props.project
		const requirements = this.props.project.requirements;
		let id = 0;
		for (const requirement of requirements) {
			requirement.id = id++;
		}

		this.state = {
			selectedRequirementId: 0,
			currentSection: 'inbox',
			requirements
		};
	}

	openRequirement(id) {
		const requirements = this.state.requirements;
		const index = requirements.findIndex(x => x.id === id);
		requirements[index].read = 'true';
		this.setState({
			selectedRequirementId: id,
			requirements
		});
	}

	approveRequirement(id) {
		//alert("Approve " + id)
		const requirements = this.state.requirements;
		const index = requirements.findIndex(x => x.id === id);
		requirements[index].status = (requirements[index].status == 'approved' ? 'pending' : 'approved');
		this.setState({
			requirements
		});
	}

	modifyRequirement(id) {
		//alert("Modify " + id)
		const requirements = this.state.requirements;
		const index = requirements.findIndex(x => x.id === id);
		requirements[index].status = (requirements[index].status == 'modified' ? 'pending' : 'modified');
		this.setState({
			requirements
		});
	}

	removeRequirement(id) {
		//alert("Remove " + id)
		const requirements = this.state.requirements;
		const index = requirements.findIndex(x => x.id === id);
		requirements[index].status = (requirements[index].status == 'removed' ? 'pending' : 'removed');
		this.setState({
			requirements
		});
	}

	showRequirementDetail(id) {
		//alert("Show " + id)
		//const requirements = this.state.requirements;
		//const index = requirements.findIndex(x => x.id === id);
		//requirements[index].status = (requirements[index].status == 'removed' ? 'pending' : 'removed');
		//this.setState({
		//	requirements
		//});
	}



	deleteMessage(id) {
		// Mark the message as 'deleted'
		const requirements = this.state.requirements;
		const index = requirements.findIndex(x => x.id === id);
		requirements[index].tag = 'deleted';

		// Select the next message in the list
		let selectedRequirementId = '';
		for (const requirement of requirements) {
			if (requirement.tag === this.state.currentSection) {
				selectedRequirementId = requirement.id;
				break;
			}
		}

		this.setState({
			requirements,
			selectedRequirementId
		});
	}

	setTopbarSection(section) {
		let selectedRequirementId = this.state.selectedRequirementId;
		if (section !== this.state.currentSection) {
			selectedRequirementId = '';
		}

		this.setState({
			currentSection: section,
			selectedRequirementId
		});
	}

	render() {
		const currentRequirement = this.state.requirements.find(x => x.id === this.state.selectedRequirementId);
		return (
			<div>
				<Topbar
					project={this.props.project}
					setTopbarSection={(section) => { this.setTopbarSection(section); }} />
				<div className="project-container">
					<RequirementList
						requirements={this.state.requirements.filter(x => x.tag === this.state.currentSection)}
						onRequirementSelected={(id) => { this.openRequirement(id); }}
						onApprove={(id) => { this.approveRequirement(id); }}
						onModify={(id) => { this.modifyRequirement(id); }}
						onRemove={(id) => { this.removeRequirement(id); }}
						onDetail={(id) => { this.showRequirementDetail(id); }}
						selectedRequirementId={this.state.selectedRequirementId}
						currentSection={this.state.currentSection} />
					{/*<RequirementDetails
						requirement={currentRequirement}
						onDelete={(id) => { this.deleteMessage(id); }} /> */}
				</div>
			</div>
		)
	}
}
/* Menu */

function onOpenChange(value) {
  console.log('onOpenChange', value);
}


/* Topbar */
const Topbar = ({
	project,
	setTopbarSection
}) => {
    const requirements = project.requirements

	var pendingCount = requirements.reduce(
		function(previous, requirement) {
			if (requirement.status !== "approved") {
				return previous + 1;
			} else {
				return previous;
			}
		}.bind(this), 0);

	var approvedCount = requirements.reduce(
		function(previous, requirement) {
			if (requirement.tag === "approved") {
				return previous + 1;
			} else {
				return previous;
			}
		}.bind(this), 0);

	return (
		<div id="topbar">
			<h1>Project {project.name}</h1>
		</div>
	);
};

/* Requirement classes */
const RequirementListItem = ({
	requirement,
	onRequirementClicked,
	onApprove,
	onModify,
	onRemove,
	onDetail,
	selected
}) => {
	let classes = "requirement-item";
	if (selected) {
		classes += " selected"
	}

	return (
		<div onClick={() => { onRequirementClicked(requirement.id); }} className={classes} data-status={requirement.status}>

		    <div className="requirement-item__title">{requirement.identifier} {requirement.title}</div>
		    <span onClick={() => { onApprove(requirement.id); }} className="approve-btn fa fa-check-circle-o fa-2x" data-status={requirement.status}></span>
		    <span onClick={() => { onModify(requirement.id); }} className="modify-btn fa fa-wrench fa-2x" data-status={requirement.status}></span>
		    <span onClick={() => { onRemove(requirement.id); }} className="remove-btn fa fa-times-circle-o fa-2x" data-status={requirement.status}></span>
			<span onClick={() => { onDetail(requirement.id); }} className="details-btn fa fa-bars fa-2x"></span>

		    <div className="requirement-item__description" style={{whiteSpace: 'pre-wrap'}}>{requirement.description}</div>
		</div>
	);
}

const RequirementDetails = ({
	requirement,
	onDelete
}) => {
	if (!requirement) {
		return (
			<div className="requirement-content empty"></div>
		);
	}

	const date = `${getPrettyDate(requirement.time)} · ${getPrettyTime(requirement.time)}`;

	const getDeleteButton = () => {
		if (requirement.tag !== 'deleted') {
			return <span onClick={() => { onDelete(requirement.id); }} className="delete-btn fa fa-trash-o"></span>;
		}
		return undefined;
	}

	return (
		<div className="requirement-content">
			<div className="requirement-content__header">
				<h3 className="requirement-content__subject">{requirement.subject}</h3>
				{getDeleteButton()}
				<div className="requirement-content__time">{date}</div>
				<div className="requirement-content__assigned_to">{requirement.assigned_to}</div>
			</div>
			<div className="requirement-content__message">{requirement.message}</div>
		</div>
	);
};

/* RequirementList contains a list of Requirement components */
const RequirementList = ({
	requirements,
	onRequirementSelected,
	onApprove,
	onModify,
	onRemove,
	selectedRequirementId
}) => {
	if (requirements.length === 0) {
		return (
			<div className="requirement-list empty">
				Nothing to see here, great job!
			</div>
		);
	}

	return (
		<div className="requirement-list">
			{
				requirements.map(requirement => {
					return (
						<RequirementListItem
							onRequirementClicked={(id) => { onRequirementSelected(id); }}
							onApprove={(id) => { onApprove(id); }}
							onModify={(id) => { onModify(id); }}
							onRemove={(id) => { onRemove(id); }}
							onDetail={(id) => { onDetail(id); }}
							requirement={requirement}
							selected={selectedRequirementId === requirement.id} />
					);
				})
			}
		</div>
	);
};

// Helper methods
const getPrettyDate = (date) => {
	date = date.split(' ')[0];
	const newDate = date.split('-');
	const month = months[0];
	return `${month} ${newDate[2]}, ${newDate[0]}`;
}

// Remove the seconds from the time
const getPrettyTime = (date) => {
	const time = date.split(' ')[1].split(':');
	return `${time[0]}:${time[1]}`;
}

// create classes
var NavBar = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>
        </div>
      </nav>
    );
  }
});

var NavBrand = React.createClass({
  render: function(){
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    );
  }
});

var NavMenu = React.createClass({
  render: function(){
    var links = this.props.links.map(function(link){
      if(link.dropdown) {
        return (
          <NavLinkDropdown links={link.links} text={link.text} active={link.active} />
        );
      }
      else {
        return (
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
});

var NavLinkDropdown = React.createClass({
  render: function(){
    var active = false;
    var links = this.props.links.map(function(link){
      if(link.active){
        active = true;
      }
      return (
        <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
      );
    });
    return (
      <li className={"dropdown " + (active ? "active" : "")}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {this.props.text}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {links}
        </ul>
      </li>
    );
  }
});

var NavLink = React.createClass({
  render: function(){
    return(
      <li className={(this.props.active ? "active" : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>
    );
  }
});

// set data
var navbar = {};
navbar.brand =
  {linkTo: "#", text: "React Bootstrap Navbar"};
navbar.links = [
  {linkTo: "#", text: "Link 1"},
  {linkTo: "#", text: "Link 2"},
  {dropdown: true, text: "Dropdown", links: [
    {linkTo: "#", text: "Dropdown Link 1"},
    {linkTo: "#", text: "Dropdown Link 2", active: true}
  ]}
];

// // render NavBar
// React.render(
//   <NavBar {...navbar} />,
//   document.getElementById("navbar")
// );


React.render(<App project={data[0]} />, document.getElementById('project'));

/* Render
$.ajax({url: 'https://s3-us-west-1.amazonaws.com/requirement-demo/demo-data.json',
	type: 'GET',
	success: function(result) {
		React.render(<App requirements={result} />, document.getElementById('project'));
	}
});
*/
