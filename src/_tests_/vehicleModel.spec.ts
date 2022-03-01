import { VehicleModel } from '../models/vehicle-model';


describe('classes', () => {
    it("Class VehicleModel", () => {
        const vehicleModel = new VehicleModel()
        
        expect(vehicleModel.name).toEqual('Nissan')
    })
})