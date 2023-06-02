var Interruptor = React.createClass({
	getInitialState: function(){
		return {
			estado: this.props.estadoInicial
		}
	},
	cambiarEstado: function(){
    console.log('hola mundo');
		var newState = (this.state.estado === 'Apagado' ? 'Encendido' : 'Apagado');
		this.setState({
			estado: newState
		});
	},
	render: function(){
		return (
			<div>
				<button onClick={this.cambiarEstado}>Interruptor</button>
				<p>{this.state.estado}</p>
			</div>
		);
	}
});
ReactDOM.render(<Interruptor estadoInicial="Apagado" />, document.getElementById('container'));