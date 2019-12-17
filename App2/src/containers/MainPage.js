import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import {
  readDestinations,
  createDestinations,
  deleteDestinations,
  readSingleDestination,
  updateDestinations,
} from '../actions';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      temperature: null,
      location: null,
      height: null,
      difficulty: null,
      about: null,
      duration: null,
      water: null,
      image: null,
      valid: false,
      onPress: false,
      destinations: [],
      destinations_names: [],
      selectedDestination: '',
      singleDestinations: [],
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChangeDropDown = this.handleChangeDropDown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.readDestinations().then(() => {
      this.setState({
        destinations: this.props.destinations,
        destinations_name: this.props.destinations.map(dest => {
          return {
            value: dest._id,
            label: dest.name,
          };
        }),
      });
    });
  }

  handleChangeTab = () => {
    this.setState(
      {
        name: '',
        temperature: '',
        location: '',
        height: '',
        difficulty: '',
        about: '',
        duration: '',
        water: '',
        image: '',
        selectedDestination: '',
        onPress: false,
      },
      () => {
        this.props.readDestinations().then(() => {
          this.setState({
            destinations: this.props.destinations,
            destinations_name: this.props.destinations.map(dest => {
              return {
                value: dest._id,
                label: dest.name,
              };
            }),
          });
        });
      },
    );
  };

  handleChangeDropDown = value => {
    this.setState(
      {
        selectedDestination: value,
      },
      () => {
        if (this.state.selectedDestination) {
          this.props
            .readSingleDestination(this.state.selectedDestination)
            .then(() => {
              this.setState({
                name: this.props.singleViewDestinations.name,
                temperature: this.props.singleViewDestinations.temperature,
                location: this.props.singleViewDestinations.location,
                height: this.props.singleViewDestinations.height.toString(),
                difficulty: this.props.singleViewDestinations.difficulty.toString(),
                about: this.props.singleViewDestinations.about,
                duration: this.props.singleViewDestinations.duration,
                water: this.props.singleViewDestinations.water.toString(),
                image: this.props.singleViewDestinations.image,
              });
            });
        } else {
          this.setState({
            name: null,
            temperature: null,
            location: null,
            height: null,
            difficulty: null,
            about: null,
            duration: null,
            water: null,
            image: null,
          });
        }
      },
    );
  };

  handleCreate = () => {
    const {
      name,
      temperature,
      location,
      height,
      difficulty,
      about,
      duration,
      water,
      image,
    } = this.state;
    const payload = {
      name: name,
      temperature: temperature,
      location: location,
      height: height,
      difficulty: difficulty,
      about: about,
      duration: duration,
      water: water,
      image: image,
    };

    this.setState({
      onPress: true,
    });

    if (
      payload.name &&
      payload.temperature &&
      payload.location &&
      payload.height &&
      payload.difficulty &&
      payload.about &&
      payload.duration &&
      payload.water &&
      payload.image
    ) {
      this.props.createDestinations(payload).then(() => {
        this.setState({
          name: null,
          temperature: null,
          location: null,
          height: null,
          difficulty: null,
          about: null,
          duration: null,
          water: null,
          image: null,
          onPress: false,
        });
      });
      alert('Created successfully');
    } else {
      this.setState(
        {
          valid: true,
        },
        () => alert('wrong entry destination'),
      );
    }
  };

  handleUpdate = () => {
    const {
      name,
      temperature,
      location,
      height,
      difficulty,
      about,
      duration,
      water,
      image,
      selectedDestination,
    } = this.state;
    const payload = {
      name: name,
      temperature: temperature,
      location: location,
      height: height,
      difficulty: difficulty,
      about: about,
      duration: duration,
      water: water,
      image: image,
    };

    this.setState({
      onPress: true,
    });

    if (
      !this.props.error &&
      (payload.name &&
        payload.temperature &&
        payload.location &&
        payload.height &&
        payload.difficulty &&
        payload.about &&
        payload.duration &&
        payload.water &&
        payload.image)
    ) {
      this.props.updateDestinations(selectedDestination, payload).then(() => {
        this.setState({
          name: null,
          temperature: null,
          location: null,
          height: null,
          difficulty: null,
          about: null,
          duration: null,
          water: null,
          image: null,
          onPress: false,
        });
      });
      alert('Updated successfully');
    } else {
      this.setState(
        {
          valid: true,
        },
        () => alert('wrong entry destination'),
      );
    }
  };

  handleInputChange = (name, event) => {
    this.setState({[name]: event, valid: false, onPress: false});
  };

  handleDelete = () => {
    if (this.state.selectedDestination) {
      this.props.deleteDestinations(this.state.selectedDestination).then(() => {
        this.setState({
          selectedDestination: '',
        });
      });
      alert('Deleted Successfully!');
    } else {
      alert('Failed Deleting Destination');
    }
  };

  render() {
    return (
      <NavigationBar
        name={this.state.name}
        temperature={this.state.temperature}
        location={this.state.location}
        height={this.state.height}
        difficulty={this.state.difficulty}
        about={this.state.about}
        duration={this.state.duration}
        water={this.state.water}
        image={this.state.image}
        handleCreate={e => this.handleCreate(e)}
        handleInputChange={(name, e) => this.handleInputChange(name, e)}
        readData={this.props.destinations}
        readDataDropdown={this.state.destinations_name}
        handleChangeDropDown={e => this.handleChangeDropDown(e)}
        handleChangeTab={e => this.handleChangeTab(e)}
        handleDelete={e => this.handleDelete(e)}
        handleUpdate={e => this.handleUpdate(e)}
        valid={this.state.valid}
        onPress={this.state.onPress}
        selectedDestination={this.state.selectedDestination}
      />
    );
  }
}

const mapStatetoProps = ({destination}) => {
  const {
    name,
    temperature,
    location,
    height,
    difficulty,
    about,
    duration,
    water,
    image,
    destinations,
    singleViewDestinations,
    error,
  } = destination;
  return {
    name,
    temperature,
    location,
    height,
    difficulty,
    about,
    duration,
    water,
    image,
    destinations,
    singleViewDestinations,
    error,
  };
};

export default connect(
  mapStatetoProps,
  {
    readDestinations,
    createDestinations,
    deleteDestinations,
    readSingleDestination,
    updateDestinations,
  },
)(MainPage);
