import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../actions/posts";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  typeValues,
  fuelValues,
  transmissionValues,
  booleanValues,
} from "../components/ListboxData.js";

const AddEdit = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    brand: "",
    model: "",
    version: "",
    type: "",
    year: "",
    km: "",
    motor: "",
    owners: "",
    tapizado: "",
    location: "",
    power: "",
    accel: "",
    fuelConsumption: "",
    fuelCapacity: "",
    price: "",
    transmission: "",
    fuel: "",
    t4x4: false,
    armor: false,
    folder: "",
    mainImgN: "",
    mainImgD: "",
    othersImgN: [],
    othersImgD: [],
  });
  //const [folder, setFolder] = useState("");
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      brand: "",
      model: "",
      version: "",
      type: "",
      year: "",
      km: "",
      motor: "",
      owners: "",
      tapizado: "",
      location: "",
      power: "",
      accel: "",
      fuelConsumption: "",
      fuelCapacity: "",
      price: "",
      transmission: "",
      fuel: "",
      t4x4: false,
      armor: false,
      addInfo: "",
      details: "",
      folder: "",
      mainImgN: "",
      mainImgD: "",
      othersImgN: [],
      othersImgD: [],
    });
  };

  //const endpoint = "https://ik.imagekit.io/cdty/tcp/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  //console.log(postData);

  function getImages(e, prop) {
    //console.log(e);
    const array = [];
    for (const img of e) {
      //array.push(endpoint + folder + "/" + img[prop]);
      array.push(img[prop]);
    }
    console.log(array);
    return array;
  }
  console.log(post);

  return (
    <div className="bg-white p-8">
      <h1 className="py-8 font-bold text-3xl mb-6 w-full text-center">
        {currentId
          ? `Editando ${post.brand + " " + post.model + " " + post.year}`
          : "Introduce los datos del vehículo"}
      </h1>
      <form
        autoComplete="off"
        noValidate
        className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="inline-block text-gray-400 text-sm sm:text-base">
          Cabecera
        </label>
        <div class="w-full sm:border- sm:border-b mb-5 sm:mb-8 sm:col-span-2"></div>
        <div>
          <label
            for="marca"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Marca
          </label>
          <input
            name="marca"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.brand}
            onChange={(e) =>
              setPostData({ ...postData, brand: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="modelo"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Modelo
          </label>
          <input
            name="modelo"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.model}
            onChange={(e) =>
              setPostData({ ...postData, model: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="version"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Versión
          </label>
          <input
            name="version"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.version}
            onChange={(e) =>
              setPostData({ ...postData, version: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="año"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Año
          </label>
          <input
            name="year"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.year}
            onChange={(e) => setPostData({ ...postData, year: e.target.value })}
          ></input>
        </div>
        <div>
          <label
            for="kilometraje"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Kilometraje
          </label>
          <input
            name="km"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.km}
            onChange={(e) => setPostData({ ...postData, km: e.target.value })}
          ></input>
        </div>
        <div>
          <label
            for="price"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Precio
          </label>
          <input
            name="price"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.price}
            onChange={(e) =>
              setPostData({ ...postData, price: e.target.value })
            }
          ></input>
        </div>
        <div className="sm:col-span-2">
          <label
            for="type"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Categoría
          </label>
          <Listbox
            value={postData.type}
            onChange={(value) => setPostData({ ...postData, type: value })}
          >
            <div className="relative">
              <Listbox.Button className="relative h-12 w-full cursor-pointer rounded-md bg-gray-100 py-4 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate pl-2">{postData.type}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {typeValues.map((typeValue, typeValueIdx) => (
                    <Listbox.Option
                      key={typeValueIdx}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-yellow-200" : "text-gray-900"
                        }`
                      }
                      value={typeValue.content}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {typeValue.content}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-yellow-300">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="false"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <label className="inline-block text-gray-400 text-sm sm:text-base mt-4">
          Características
        </label>
        <div class="w-full sm:border- sm:border-b mb-5 sm:mb-8 sm:col-span-2"></div>
        <div>
          <label
            for="motor"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Motor
          </label>
          <input
            name="motor"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.motor}
            onChange={(e) =>
              setPostData({ ...postData, motor: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="dueños"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Dueños
          </label>
          <input
            name="owners"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.owners}
            onChange={(e) =>
              setPostData({ ...postData, owners: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="tapizado"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Tapizado
          </label>
          <input
            name="tapizado"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.tapizado}
            onChange={(e) =>
              setPostData({ ...postData, tapizado: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="location"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Ubicación
          </label>
          <input
            name="location"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.location}
            onChange={(e) =>
              setPostData({ ...postData, location: e.target.value })
            }
          ></input>
        </div>
        <div className="sm:col-span-2">
          <label
            for="type"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            4 x 4
          </label>
          <Listbox
            value={postData.t4x4 ? "Si" : "No"}
            onChange={(value) =>
              setPostData({ ...postData, t4x4: value === "Si" })
            }
          >
            <div className="relative">
              <Listbox.Button className="relative h-12 w-full cursor-pointer rounded-md bg-gray-100 py-4 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate pl-2">{postData.t4x4}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {booleanValues.map((booleanValue, booleanValueIdx) => (
                    <Listbox.Option
                      key={booleanValueIdx}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-yellow-200" : "text-gray-900"
                        }`
                      }
                      value={booleanValue.content}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {booleanValue.content}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-yellow-300">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="false"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="sm:col-span-2">
          <label
            for="type"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Blindaje
          </label>
          <Listbox
            value={postData.armor ? "Si" : "No"}
            onChange={(value) =>
              setPostData({ ...postData, armor: value === "Si" })
            }
          >
            <div className="relative">
              <Listbox.Button className="relative h-12 w-full cursor-pointer rounded-md bg-gray-100 py-4 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate pl-2">{postData.armor}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {booleanValues.map((booleanValue, booleanValueIdx) => (
                    <Listbox.Option
                      key={booleanValueIdx}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-yellow-200" : "text-gray-900"
                        }`
                      }
                      value={booleanValue.content}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {booleanValue.content}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-yellow-300">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="false"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="sm:col-span-2">
          <label
            for="type"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Transmisión
          </label>
          <Listbox
            value={postData.transmission}
            onChange={(value) =>
              setPostData({ ...postData, transmission: value })
            }
          >
            <div className="relative">
              <Listbox.Button className="relative h-12 w-full cursor-pointer rounded-md bg-gray-100 py-4 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate pl-2">
                  {postData.transmission}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {transmissionValues.map(
                    (transmissionValue, transmissionValueIdx) => (
                      <Listbox.Option
                        key={transmissionValueIdx}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                            active ? "bg-yellow-200" : "text-gray-900"
                          }`
                        }
                        value={transmissionValue.content}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {transmissionValue.content}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-yellow-300">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="false"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    )
                  )}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="sm:col-span-2">
          <label
            for="type"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Combustible
          </label>
          <Listbox
            value={postData.fuel}
            onChange={(value) => setPostData({ ...postData, fuel: value })}
          >
            <div className="relative">
              <Listbox.Button className="relative h-12 w-full cursor-pointer rounded-md bg-gray-100 py-4 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate pl-2">{postData.fuel}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {fuelValues.map((fuelValue, fuelValueIdx) => (
                    <Listbox.Option
                      key={fuelValueIdx}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-yellow-200" : "text-gray-900"
                        }`
                      }
                      value={fuelValue.content}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {fuelValue.content}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-yellow-300">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="false"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <label className="inline-block text-gray-400 text-sm sm:text-base mt-4">
          Especificaciones
        </label>
        <div class="w-full sm:border- sm:border-b mb-5 sm:mb-8 sm:col-span-2"></div>
        <div>
          <label
            for="power"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Potencia
          </label>
          <input
            name="power"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.power}
            onChange={(e) =>
              setPostData({ ...postData, power: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="accel"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Aceleración
          </label>
          <input
            name="accel"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.accel}
            onChange={(e) =>
              setPostData({ ...postData, accel: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="fuelConsumption"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Consumo de combustible
          </label>
          <input
            name="fuelConsumption"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.fuelConsumption}
            onChange={(e) =>
              setPostData({ ...postData, fuelConsumption: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label
            for="fuelCapacity"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Capacidad del tanque
          </label>
          <input
            name="fuelCapacity"
            className="w-full bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.fuelCapacity}
            onChange={(e) =>
              setPostData({ ...postData, fuelCapacity: e.target.value })
            }
          ></input>
        </div>

        <label className="inline-block text-gray-400 text-sm sm:text-base">
          Detalles
        </label>
        <div class="w-full sm:border- sm:border-b mb-5 sm:mb-8 sm:col-span-2"></div>
        <div className="sm:col-span-2">
          <label
            for="details"
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            Detalles del vehículo
          </label>
          <textarea
            name="details"
            className="w-full h-32 bg-gray-100 text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.details}
            onChange={(e) =>
              setPostData({ ...postData, details: e.target.value })
            }
          ></textarea>
        </div>

        <label className="inline-block text-gray-400 text-sm sm:text-base">
          Subida de archivos
        </label>
        <div class="w-full sm:border- sm:border-b mb-5 sm:mb-8 sm:col-span-2"></div>

        <div className="sm:col-span-2">
          <label
            for="folder"
            className="text-gray-800 text-sm sm:text-base mb-2"
          >
            Número de carpeta
          </label>
          <br />
          <input
            name="folder"
            placeholder="ej. 00010"
            className="w-full mt-2 bg-gray-100 text-right text-gray-800 border focus:ring ring-yellow-300 rounded outline-none transition duration-100 px-3 py-2"
            value={postData.folder}
            onChange={(e) =>
              setPostData({ ...postData, folder: e.target.value })
            }
          ></input>
        </div>

        <div className="inline-block">
          <label className="text-gray-800 pl-1 text-sm sm:text-base ">
            Imagen principal del vehículo
          </label>
          <FileBase
            id="mainImgInput"
            type="file"
            multiple={false}
            onDone={({ name, base64 }) =>
              setPostData({ ...postData, mainImgN: name, mainImgD: base64 })
            }
          ></FileBase>
        </div>
        <br />

        <div className="inline-block">
          <label
            for="type"
            className="inline-block text-gray-800 text-sm sm:text-base pl-1"
          >
            Imagenes adicionales del vehículo
          </label>
          <FileBase
            id="otherImgInput"
            className="hidden"
            type="file"
            multiple={true}
            onDone={(e) =>
              setPostData({
                ...postData,
                othersImgN: getImages(e, "name"),
                othersImgD: getImages(e, "base64"),
              })
            }
          ></FileBase>
        </div>
        <br />

        <button
          type="submit"
          className="w-38 py-3 font-bold rounded-md text-center px-2 text-white bg-emerald-400 active:duration-300 hover:bg-slate-100 hover:text-emerald-400 active:scale-95 cursor-pointer"
        >
          Enviar
        </button>
        <button
          onClick={clear}
          className="w-38 py-3 font-bold rounded-md text-center px-2 text-white active:duration-300 delay-100 bg-blue-400 hover:bg-slate-100 hover:text-blue-400 active:scale-95 cursor-pointer"
        >
          Limpiar
        </button>

        <button
          className="w-38 py-3 font-bold rounded-md text-center px-2 text-white bg-emerald-400 active:duration-300 hover:bg-slate-100 hover:text-emerald-400 active:scale-95 cursor-pointer"
        >
          Modal
        </button>

      </form>
    </div>
  );
};

export default AddEdit;
