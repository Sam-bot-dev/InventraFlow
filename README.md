<p align="center">
  <img src="static/odoo.jpeg" width="120">
</p>

<h1 align="center">InventraFlow</h1>

<p align="center">
  <b>InventraFlow — Enterprise Inventory Operations Platform</b><br>
  A modern ERP-style system for managing warehouse inventory, stock movement, and logistics workflows.



 ![License](https://img.shields.io/badge/license-MIT-green)
 ![Python](https://img.shields.io/badge/backend-Python-blue) 
 ![Flask](https://img.shields.io/badge/framework-Flask-black)
 ![Firebase](https://img.shields.io/badge/authentication-Firebase-orange)
 ![Status](https://img.shields.io/badge/status-Active-success)
 ![Hackathon](https://img.shields.io/badge/built%20for-Hackathon-purple)

</p>

---

# Overview

**InventraFlow** is a modular **Inventory Management System (IMS)** designed to streamline warehouse operations and replace manual stock tracking methods such as spreadsheets and physical registers.

The platform provides a centralized interface to manage:

* Incoming inventory
* Outgoing shipments
* Internal stock transfers
* Inventory adjustments
* Warehouse stock monitoring

InventraFlow provides real-time inventory visibility and a **complete transaction ledger** for tracking product movements.

The interface follows modern **ERP dashboard design patterns similar to Odoo, Zoho Inventory, and ERPNext**.

---

# Dashboard

The **dashboard acts as the control center** of the system, displaying real-time insights into inventory operations.

### Dashboard KPIs

* Total Products in Stock
* Low Stock / Out of Stock Items
* Pending Receipts
* Pending Deliveries
* Scheduled Internal Transfers

### Dashboard Components

* Inventory analytics charts
* Recent transaction activity feed
* Low stock alerts
* Warehouse stock overview

### Dynamic Filters

Users can filter dashboard data by:

* Document Type (Receipts, Delivery, Transfers, Adjustments)
* Status (Draft, Waiting, Ready, Done, Cancelled)
* Warehouse or Location
* Product Category

---

# Core Modules

## Product Management

Manage product catalog and warehouse stock.

Product attributes include:

* Product Name
* SKU / Product Code
* Category
* Unit of Measure
* Warehouse Location
* Initial Stock Quantity

Features:

* SKU search
* Category filtering
* Reordering rules
* Multi-location stock visibility

---

## Receipts (Incoming Goods)

Receipts represent products arriving from suppliers.

Workflow:

1. Create receipt
2. Add supplier
3. Add products
4. Enter quantities
5. Validate receipt

Stock is automatically increased upon validation.

Example:

Receiving **50 units of Steel Rods**

Stock update:

+50

---

## Delivery Orders (Outgoing Goods)

Delivery orders represent products leaving the warehouse for shipment.

Workflow:

1. Pick items
2. Pack items
3. Validate delivery

Stock automatically decreases after validation.

Example:

Shipping **10 chairs**

Stock update:

-10

---

## Internal Transfers

Move inventory between warehouse locations.

Examples:

* Main Warehouse → Production Floor
* Rack A → Rack B
* Warehouse 1 → Warehouse 2

Total inventory remains unchanged but **location tracking updates automatically**.

Each movement is recorded in the inventory ledger.

---

## Inventory Adjustments

Inventory adjustments correct discrepancies between system stock and physical stock.

Adjustment workflow:

1. Select product
2. Select warehouse location
3. Enter counted quantity
4. Apply adjustment

Example:

Damaged steel inventory

Adjustment:

-3 kg

---

# Stock Ledger

Every inventory event is logged in a **centralized stock ledger**.

Logged operations include:

* Receipts
* Deliveries
* Internal Transfers
* Stock Adjustments

Ledger fields include:

* Timestamp
* Product
* Operation Type
* Source Location
* Destination Location
* Quantity Change
* User

---

# Example Inventory Flow

Step 1 – Receive Goods

Receive **100 kg steel**

Stock change:

+100

Step 2 – Internal Transfer

Main Store → Production Rack

Stock remains unchanged, location updated.

Step 3 – Delivery

Deliver **20 steel frames**

Stock change:

-20

Step 4 – Adjustment

3 kg steel damaged

Stock change:

-3

All operations are recorded in the **stock ledger**.

---

# System Architecture

InventraFlow uses a modular architecture designed for scalable inventory platforms.

### Frontend

* HTML
* CSS
* JavaScript
* ERP-style dashboard UI

### Backend

* Python
* Flask

### Authentication

* Firebase Authentication
* OTP-based password reset

### Database

* Firebase Firestore

---

# Project Structure

```
InventraFlow
│
├── frontend
│   ├── dashboard
│   ├── products
│   ├── operations
│   └── components
│
├── backend
│   ├── routes
│   ├── services
│   └── models
│
├── database
│
├── assets
│
└── README.md
```

---

# Target Users

InventraFlow is designed for organizations that require structured inventory tracking.

Primary users include:

* Inventory Managers
* Warehouse Staff
* Logistics Coordinators
* Supply Chain Teams

---

# Future Enhancements

Planned improvements include:

* AI-based stock demand forecasting
* Automated reorder recommendations
* Barcode / QR scanning
* Advanced analytics dashboards
* ERP integrations
* Mobile warehouse interface

---

# License

This project is licensed under the **MIT License**.

---

# Hackathon Project

InventraFlow was developed as a **hackathon project** demonstrating how warehouse operations can be digitized using a modern modular system.

---


<p align="center">
  <table>
    <tr>
      <td align="center" width="33.3%">
        <div>
          <img src="https://avatars.githubusercontent.com/Sam-bot-dev?s=120" width="120px;" height="120px;" alt="Bhavesh"/>
        </div>
        <div><strong>🧩 Head Teammate</strong></div>
        <div><strong>Bhavesh</strong></div>
        <a href="https://github.com/Sam-bot-dev">🌐 GitHub</a>
      </td>
      <td align="center" width="33.3%">
        <div>
          <img src="https://avatars.githubusercontent.com/notUbaid?s=120" width="120px;" height="120px;" alt="Ubaid khan"/>
        </div>
        <div><strong>⭐ Team Leader</strong></div>
        <div><strong>Ubaid khan</strong></div>
        <a href="https://github.com/niyatijoshi707-ai">🌐 GitHub</a>
      </td>
      <!-- <td align="center" width="33.3%">
        <div>
          <img src="https://avatars.githubusercontent.com/rhn9999?s=120" width="120px;" height="120px;" alt="Rohan"/>
        </div>
        <div><strong>Teammate</strong></div>
        <div><strong>Rohan</strong></div>
        <a href="https://github.com/rhn9999">🌐 GitHub</a>
      </td> -->
    </tr>
  </table>
</p>
---

⭐ If you like this project, consider giving it a star!
