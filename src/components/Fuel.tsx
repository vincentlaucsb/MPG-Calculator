﻿import * as React from "react";
import { Modal } from "./Modal";
import { MinimizableCard } from "./MinimizableCard";
import { DisabledButton, PrimaryButton } from "./Buttons";
import { IJsonSerializable } from "./IJSONSerializable";
import { jsonifyMap } from "./helpers";

export enum FuelType {
    regular,
    mid,
    premium,
    diesel
}

export function fuelString(type: FuelType) {
    switch (type) {
        case FuelType.regular:
            return "Regular (87)";
        case FuelType.mid:
            return "Mid-Grade (89)";
        case FuelType.premium:
            return "Premium (92)";
        case FuelType.diesel:
            return "Diesel";  
    }
}

export class FuelPrice implements IJsonSerializable {
    constructor() {
        this.data = new Map<FuelType, number>();
    }

    get(key: FuelType): number {
        return this.data.get(key);
    }

    set(key: FuelType, value: number): this {
        this.data.set(key, value);
        return this;
    }

    data: Map<FuelType, number>;

    load(data: object) {
        for (let k in data) {
            this.data.set(Number(k), data[k]);
        }
    }

    dump(): object {
        return jsonifyMap(this.data);
    }
}

class GasPriceChangerColumn extends React.Component<
    {id: FuelType, fuelPrice: string, onChange: any} ,{}
>    {
    render() {
        return <div
            className="form-group col-sm"
            style={{ minWidth: "10em" }}
        >
            <input className="form-control"
                name={fuelString(this.props.id)}
                type="number"
                step="0.01"
                min="0"
                id={this.props.id.toString()}
                onChange={this.props.onChange}
                value={this.props.fuelPrice}
            />
            <label
                htmlFor={this.props.id.toString()}
                className="col-sm col-form-label">
                {fuelString(this.props.id)}
            </label>
        </div>
    }
}

interface GasPriceProps {
    ppg: FuelPrice;
    updateGasPrice: any; // change
}

interface GasPriceState {
    updateable: boolean;
    ppg: FuelPrice;
    temp_ppg: Map<FuelType, string>;
}

export class GasPriceChanger extends React.Component<
    GasPriceProps, GasPriceState> {
    constructor(props: GasPriceProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            updateable: false,
            ppg: props.ppg,
            temp_ppg: new Map([
                [FuelType.regular, props.ppg.get(0).toString()],
                [FuelType.mid, props.ppg.get(1).toString()],
                [FuelType.premium, props.ppg.get(2).toString()],
                [FuelType.diesel, props.ppg.get(3).toString()]
            ]),
        };
    }

    onChange(event) {
        var temp = this.state.temp_ppg;
        let targetKey: FuelType = parseInt(event.target.id);
        temp.set(targetKey, event.target.value);

        this.setState({
            updateable: true,
            temp_ppg: temp
        });
    }

    handleSubmit(event) {
        /* "Update" button pressed */

        // Pass updated prices back up to MpgCalculator
        let newPpg = new FuelPrice();
        newPpg.set(FuelType.regular, parseFloat(this.state.temp_ppg.get(FuelType.regular)));
        newPpg.set(FuelType.mid, parseFloat(this.state.temp_ppg.get(FuelType.mid)));
        newPpg.set(FuelType.premium, parseFloat(this.state.temp_ppg.get(FuelType.premium)));
        newPpg.set(FuelType.diesel, parseFloat(this.state.temp_ppg.get(FuelType.diesel)));

        this.props.updateGasPrice(newPpg);
        event.preventDefault(); // Prevent submit from reloading page

        // Disable update button
        this.setState({
            updateable: false
        });
    }

    render() {
        const updateButton = this.state.updateable ?
            <PrimaryButton type="submit">Update</PrimaryButton> :
            <DisabledButton>Update</DisabledButton>;

        const infoBox = <Modal
            title="Good to Know: Fuel"
            triggerText="?">
            <p>
                While there may be benefits to using mid-grade (sometimes labelled "Plus") or premium fuel,
                most consumer vehicles in the US will run just fine on regular unleaded. Generally speaking,
                it is best to follow the recommendations in your owner's manual.
            </p>
        </Modal>;

        return (
            <MinimizableCard title="Price of Gas">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                    <GasPriceChangerColumn
                        id={FuelType.regular}
                        fuelPrice={this.state.temp_ppg.get(FuelType.regular)}
                        onChange={this.onChange} />
                    <GasPriceChangerColumn
                        id={FuelType.mid}
                        fuelPrice={this.state.temp_ppg.get(FuelType.mid)}
                        onChange={this.onChange}
                    />
                    <GasPriceChangerColumn
                        id={FuelType.premium}
                        fuelPrice={this.state.temp_ppg.get(FuelType.premium)}
                        onChange={this.onChange}
                    />
                    <GasPriceChangerColumn
                        id={FuelType.diesel}
                        fuelPrice={this.state.temp_ppg.get(FuelType.diesel)}
                        onChange={this.onChange}
                        />
                    </div>

                    {updateButton} {infoBox}
                </form>
            </MinimizableCard>
        );
    }
}