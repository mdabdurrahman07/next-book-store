import Sidebar from "../components/Sidebar/Sidebar";

export const metadata = {
    title: "Next Book Store | Book Details",
    description: "Buy Or Rent a Book",
  };
  const BookStorelayout = ({children}) => {
    return (
        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flwx-row">
            <div className="flex flex-wrap justify-center p-2">
                <Sidebar/>
            {children}
            </div>
        </div>
    );
  };
  
  export default BookStorelayout;