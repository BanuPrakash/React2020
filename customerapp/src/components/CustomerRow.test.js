import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';
// <CustomerRow customer={c} delEvent={(id) => this.deleteCustomer(id)} key={c.id} />
describe("testing customer row", () => {
  let callback = jest.fn(); // mock callback function 

    let c = {
        "id": 4,
        "firstName": "Monica",
        "lastName": "Geller",
        "gender": "female",
        "address": "some address"
    };

    it("test render customer row", () => {
        render(<CustomerRow customer={c} delEvent={(id) => callback(id)} key={c.id} />);
        let elem = screen.getByText(/Monica/i);
        expect(elem).toBeInTheDocument();
        screen.debug();
        let btn = screen.getByRole('button');
        fireEvent.click(btn);

        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(4);
    });
});