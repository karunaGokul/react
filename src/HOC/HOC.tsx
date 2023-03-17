import React from "react";

const HOC = (WrappedComponent: any, entity: any) => {
  return class extends React.Component {
    state: any = {
      data: [],
      term: "",
    };

    componentDidMount() {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await response.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }

    render(): any {
      let { term, data } = this.state;
      let filteredData = data.slice(0,10).filter((d:any) => {
        if(entity === "users") {
            const {name} = d;
            return name.indexOf(term) >= 0
        } 
        if(entity === "todos") {
            const {title} = d;
            return title.indexOf(term) >= 0
        }
      })
      return (
        <div>
          <h1>{entity}</h1>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              this.setState({ ...this.state, term: e.target.value });
            }}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HOC;