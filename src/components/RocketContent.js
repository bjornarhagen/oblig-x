import React, { Component } from "react";
require("../scss/_components/rockets.scss");

class RocketContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rocketcontent">
        <div className="rocket-header">
          <img
            src={this.props.rocket.flickr_images[0]}
            alt={this.props.rocket.rocket_name}
          />
        </div>
        <div className="rocket-content">
          <h3>{this.props.rocket.rocket_name}</h3>
          <p>{this.props.rocket.description}</p>
          <h4>Specs</h4>
          <table className="specs">
            <tbody>
              <tr>
                <th>Generelt</th>
              </tr>
              <tr>
                <th>Vekt</th>
                <td>{this.props.rocket.mass.kg} kg</td>
              </tr>
              <tr>
                <th>Høyde</th>
                <td>{this.props.rocket.height.meters} m</td>
              </tr>
              <tr>
                <th>Diameter</th>
                <td>{this.props.rocket.diameter.meters} m</td>
              </tr>
              <tr>
                <th>Selskap</th>
                <td>{this.props.rocket.company}</td>
              </tr>
              <tr>
                <th>Land</th>
                <td>{this.props.rocket.country}</td>
              </tr>
              <tr>
                <th>Første flyvning</th>
                <td>{this.props.rocket.first_flight}</td>
              </tr>
              <tr>
                <th>Kostnad per flyvning</th>
                <td>USD {this.props.rocket.cost_per_launch}$</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{this.props.rocket.active ? "Aktiv" : "Ikke aktiv"}</td>
              </tr>

              <tr>
                <th>First stage</th>
              </tr>
              <tr>
                <th>Gjennbrukbar</th>
                <td>{this.props.rocket.first_stage.reusable ? "Ja" : "Nei"}</td>
              </tr>
              <tr>
                <th>Motorer</th>
                <td>{this.props.rocket.first_stage.engines} stk</td>
              </tr>
              <tr>
                <th>Drivstoff</th>
                <td>{this.props.rocket.first_stage.fuel_amount_tons} tonn</td>
              </tr>
              <tr>
                <th>Kjerner</th>
                <td>{this.props.rocket.first_stage.cores} stk</td>
              </tr>
              <tr>
                <th>Brenntid</th>
                <td>{this.props.rocket.first_stage.burn_time_sec} sekunder</td>
              </tr>

              <tr>
                <th>Second stage</th>
              </tr>
              <tr>
                <th>Motorer</th>
                <td>{this.props.rocket.second_stage.engines} stk</td>
              </tr>
              <tr>
                <th>Motorer</th>
                <td>{this.props.rocket.second_stage.burn_time_sec} sekunder</td>
              </tr>
              <tr>
                <th>Motorer</th>
              </tr>
              <tr>
                <th>Antall</th>
                <td>{this.props.rocket.engines.number} stk</td>
              </tr>
              <tr>
                <th>Type</th>
                <td>{this.props.rocket.engines.type}</td>
              </tr>
              <tr>
                <th>Oppsett</th>
                <td>{this.props.rocket.engines.layout}</td>
              </tr>
              <tr>
                <th>Drivstoff 1</th>
                <td>{this.props.rocket.engines.propellant_1}</td>
              </tr>
              <tr>
                <th>Drivstoff 2</th>
                <td>{this.props.rocket.engines.propellant_2}</td>
              </tr>
              <tr>
                <th>Landingsben</th>
              </tr>
              <tr>
                <th>Antall</th>
                <td>{this.props.rocket.landing_legs.number} stk</td>
              </tr>
              <tr>
                <th>Materiale</th>
                <td>{this.props.rocket.landing_legs.material}</td>
              </tr>
            </tbody>
          </table>

          <h4>Bilder</h4>
          <div className="rocket-images">
            {this.props.rocket.flickr_images.map(image_src => (
              <img
                key={image_src}
                src={image_src}
                alt={this.props.rocket.rocket_name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RocketContent;
