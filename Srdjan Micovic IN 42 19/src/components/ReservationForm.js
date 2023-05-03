import React from 'react';
import { Helmet } from "react-helmet";
import './ReservationForm.css';

function ReservationForm() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div id="booking" className="section animate__animated animate__fadeIn">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="booking-form">
                <div className="form-header">
                  <h10>Napravite vašu rezervaciju</h10>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Check In</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Check out</span>
                        <input className="form-control" type="date" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">

                    <div className="col-md-4">
                      <div className="form-group">
                        <span className="form-label">Odrasli</span>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <span className="form-label">Deca</span>
                        <select className="form-control">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                  </div>
                  <div class="button1 animate__animated animate__fadeIn">
                     Završi Rezervaciju
                  <span class="shift">›</span>
                  <div class="mask"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
