function Hoc(WrappedComponent :any) {
    return function Hoc() {
        return (<>{true?<WrappedComponent />: <div>pradeep</div>}</>);
      
    };
  }
  export default Hoc