import { Component, ChangeEvent } from "react";


import CompraDataService from "../../services/compra.service"
import ICompraData from "../../types/compra.type";

type Props = {};

type State = ICompraData & {
  
};

export default class Compra extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
   
    this.saveCompra = this.saveCompra.bind(this);
    this.newCompra = this.newCompra.bind(this);

    this.state = {
      id_compra: 0,
      id_cliente:0,
      total_itens:0,
      total_compra :0,
      created_at:'',
      intens_compra: null,
    };
  }

 

  saveCompra() {
    const data: ICompraData = {
     
      id_compra:     this.state.id_compra,
      id_cliente:    this.state.id_cliente,
      total_itens:   this.state.total_itens,
      total_compra:  this.state.total_compra,
      created_at:    this.state.created_at,
      intens_compra: this.state.intens_compra,
    
      
    };

    CompraDataService.create(data)
      .then((response: any) => {
        this.setState({
          id_compra: response.data.id_cliente,
          id_cliente: response.data.id_cliente,
          total_itens: response.data.total_itens,
          created_at: response.data.created_at,
          intens_compra: response.data.intens_compra,
         
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newCompra() {
    this.setState({
      id_compra: 0,
      id_cliente:0,
      total_itens:0,
      total_compra :0,
      created_at:'',
      intens_compra: null,
    });
  }

  render() {
    const {  id_compra,
      id_cliente,
      total_itens,
      total_compra ,
      created_at,
      intens_compra } = this.state;

    return (
      <div className="submit-form">
        {id_compra ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCompra}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
               // value={intens_compra}
                //onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                //value={description}
                //onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button onClick={this.saveCompra} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
