import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';


const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-50 h-50"
      src={props.mainImg}
      alt="car"
    />
  </div>
);

const customerGridStatus = () => (
  <div className="flex gap-2 justify-center items-center capitalize">

    <button
      type="button"
      className="text-black py-1 px-2 capitalize rounded-2xl text-md"
    > Editar
    </button>
    <button
      type="button"
      className="text-black py-1 px-2 capitalize rounded-2xl text-md"
    > Borrar
    </button>

  </div>
);

export const customersGrid = [

//  { type: 'checkbox', width: '50' },

  { headerText: '',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },

  { field: 'brand',
    headerText: 'Marca',
    width: '150',
    textAlign: 'Center' },

  { field: 'model',
    headerText: 'Modelo',
    width: '150',
    textAlign: 'Center' },

  { field: 'price',
    headerText: 'Precio',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },

  { field: 'km',
    headerText: 'Kilometraje',
    width: '100',
    textAlign: 'Center' },

  { field: 'location',
    headerText: 'Ubicacion',
    width: '150',
    textAlign: 'Center' },

  { field: '_id',
    headerText: 'ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true },
/*
  { field: '',
    headerText: '',
    width: '120',
    textAlign: 'Center',
    template: customerGridStatus },
*/
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'auth',
        icon: <FiShoppingBag />,
      },      
      {
        name: 'ecommerce',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'inventario',
        icon: <RiContactsLine />,
      },
      {
        name: 'inventarioe',
        icon: <RiContactsLine />,
      },      
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];