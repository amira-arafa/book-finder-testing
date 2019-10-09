import mockAxios from "axios";
import BooksApi from "../Apis/BooksApi";

it("should call a fetchData function", done => {
  BooksApi.getSearchResults("term").then(response => {
    // expect(response).toEqual("           sadas");
  });
  // expect(mockAxios.request).toHaveBeenCalledWith({
  //   method: 'get',
  //   url: '/test'
  // });
  // expect(mockAxios.request).toHaveBeenCalledTimes(1);
  // expect(consoleErrorSpy).not.toHaveBeenCalled();
  done();
});
