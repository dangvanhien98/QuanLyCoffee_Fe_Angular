import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, map, tap } from 'rxjs';
import { IAddProduct } from 'src/app/models/addProduct.i';
import { ICategory } from 'src/app/models/category.i';
import { IDetailBill } from 'src/app/models/detailBill.i';
import { IGroupButtoon } from 'src/app/models/group-button.i';
import { ILocation } from 'src/app/models/location.i';
import { IListBill } from 'src/app/models/lstBill.i';
import { IProduct } from 'src/app/models/product.i';
import { ITable } from 'src/app/models/table.t';
import { BillService } from 'src/app/store/services/bill.service';
import { CategoryService } from 'src/app/store/services/category.service';
import { LocationService } from 'src/app/store/services/location.service';
import { ProductService } from 'src/app/store/services/product.service';
import { TableService } from 'src/app/store/services/table.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  locations: ILocation[] = [];
  tables: ITable[] = [];
  products: IProduct[] = [];
  categories: ICategory[] = [];
  detailBill?: IDetailBill[] = [];
  bills?: IListBill;
  addProductModel?: IAddProduct;
  constructor(
    private serviceLocation: LocationService,
    private serviceTable: TableService,
    private serviceProduct: ProductService,
    private serviceCategory: CategoryService,
    private serviceBill: BillService
  ) {
    // get all location
    this.serviceLocation.getAllLocation().subscribe((data) => {
      this.locations = data;
      this.locations[0].status = true; // default active tầng 1
    });

    // get all table
    this.serviceTable.getAllTable().subscribe((data) => {
      this.tables = data;
      this.tables[0].active = true; //default active bàn 1
    });

    // get all product
    this.serviceProduct.getAllProduct().subscribe((data) => {
      this.products = data;
    });

    //get allcategory
    this.serviceCategory.getAllCategory().subscribe((data) => {
      this.categories = data;
    });

    //get billByIdTable
    this.serviceBill.getBillByIdTable(1).subscribe((data) => {
      this.bills = data;
      this.detailBill = data.detailBills;
    });
  }

  ngOnInit() {}

  displayTable = 'block';
  displayMenu = 'none';
  eventClick(event: any) {
    if (event === 'table') {
      this.displayTable = 'block';
      this.displayMenu = 'none';
    } else {
      this.displayTable = 'none';
      this.displayMenu = 'block';
    }
    console.log(this.categories);
  }

  tableName: string = 'Bàn 1';
  getTableName(event: any) {
    //get billByIdTable
    this.serviceBill.getBillByIdTable(this.idTableActived).subscribe((data) => {
      this.bills = data;
      this.detailBill = data?.detailBills;
    });

    this.tableName = event;
  }

  getIdLocation(idLocation: any) {
    this.serviceTable.getTableByLocationId(idLocation).subscribe((data) => {
      //thêm active vào data, tables vẫn còn active khi kích vào location khác
      data.forEach((item) => {
        if (item.tableId == this.idTableActived) {
          item.active = true;
        } else item.active = false;
      });
      this.tables = data;
    });
  }
  idTableActived: number = 1;
  getIdTable(id: number) {
    this.idTableActived = id;
  }

  addProduct(idProduct: number) {
    this.addProductModel = {
      bill: {},
      detailBill: {
        productId: idProduct,
        quantity: 1,
      },
    };

    this.serviceBill
      .addBillByTable(this.idTableActived, this.addProductModel)
      .subscribe(() => this.refreshBill());
  }

  refreshBill() {
    this.serviceBill.getBillByIdTable(this.idTableActived).subscribe((data) => {
      this.bills = data;
      this.detailBill = data.detailBills;
    });
  }
}
