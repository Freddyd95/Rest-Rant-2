const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return( 
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" value={data.place.name} required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city"/>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state"/>
                        </div>
                        <div className="form group col-sm-6">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines"/>
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add PLace"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form