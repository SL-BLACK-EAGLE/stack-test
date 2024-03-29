import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { productSchema } from "../lib/validation";
import { Formik } from "formik";
import { Products } from "../types";
import { storeDataToDB, storeProductDataToDB } from "../api/storeData";

const ManageProductScreen: React.FC<{}> = () => {
  const [skuid, setSkuid] = useState("");
  const [skunumber, setSkunumber] = useState("");
  const [skuprice, setSkuprice] = useState(0);
  const [skuenabled, setSkuenabled] = useState(false);
  const [skuqtyonorder, setSkuqtyonorder] = useState(0);
  const [skuavailableindays, setSkuavailableindays] = useState(0);
  const [skuimageurl, setSkuimageurl] = useState("");
  const [skuimages, setSkuimages] = useState("");
  const [skuweight, setSkuweight] = useState(0);
  const [skuavailableitems, setSkuavailableitems] = useState(0);
  const [skulastmodified, setSkulastmodified] = useState(new Date());
  const [skucreated, setSkucreated] = useState(new Date());
  const [skuretailprice, setSkuretailprice] = useState(0);
  const [skufeatures, setSkufeatures] = useState("");
  const [skuname_enGB, setSkuname_enGB] = useState("");
  const [skushortdescription_enGB, setSkushortdescription_enGB] = useState("");
  const [skudescription_enGB, setSkudescription_enGB] = useState("");
  const [skunumbersonparts, setSkunumbersonparts] = useState("");
  const [skualtcode, setSkualtcode] = useState("");
  const [skupath, setSkupath] = useState("");

  const initialValues: Products = {
    skuid: 0,
    skunumber: "",
    skuprice: 0.0,
    skuenabled: false,
    skuqtyonorder: 0,
    skuavailableindays: 0,
    skuimageurl: "",
    skuweight: 0,
    skuavailableitems: 0,
    skulastmodified: new Date(),
    skucreated: new Date(),
    skuretailprice: 0,
    skufeatures: "",
    skuname_enGB: "",
    skushortdescription_enGB: "",
    skudescription_enGB: "",
    skunumbersonparts: "",
    skualtcode: "",
    skupath: "",
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView className="flex-1 items-center w-full h-full bg-white">
        <View className="p-2 justify-center flex flex-col">
          <Text className="text-2xl font-bold">Add New Product</Text>
          <Formik
            initialValues={initialValues}
            validationSchema={productSchema}
            onSubmit={(values) => {
              // console.log(values);
             const saveData = storeProductDataToDB([values]);
              console.log(saveData);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <View className="gap-y-3">
                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKUID</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuid")}
                      value={values.skuid.toString()}
                      placeholder="skuid"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuid && errors.skuid && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuid}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Number</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skunumber")}
                      value={values.skunumber}
                      placeholder="skunumber"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skunumber && errors.skunumber && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skunumber}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Price</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuprice")}
                      value={values.skuprice.toString()}
                      placeholder="skuprice"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuprice && errors.skuprice && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuprice}
                    </Text>
                  )}
                </View>
                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Enabled</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuenabled")}
                      value={values.skuenabled.toString()}
                      placeholder="skuenabled"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuenabled && errors.skuenabled && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuenabled}
                    </Text>
                  )}
                </View>
                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Qty On Order</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuqtyonorder")}
                      value={values.skuqtyonorder.toString()}
                      placeholder="skuqtyonorder"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuqtyonorder && errors.skuqtyonorder && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuqtyonorder}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Available In Days</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuavailableindays")}
                      value={values.skuavailableindays.toString()}
                      placeholder="skuavailableindays"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuavailableindays && errors.skuavailableindays && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuavailableindays}
                    </Text>
                  )}
                </View>
                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Image URL</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuimageurl")}
                      value={values.skuimageurl}
                      placeholder="skuimageurl"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuimageurl && errors.skuimageurl && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuimageurl}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Weight</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuweight")}
                      value={values.skuweight.toString()}
                      placeholder="skuweight"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuweight && errors.skuweight && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuweight}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Available Items</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuavailableitems")}
                      value={values.skuavailableitems.toString()}
                      placeholder="skuavailableitems"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuavailableitems && errors.skuavailableitems && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuavailableitems}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Retail Price</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuretailprice")}
                      value={values.skuretailprice.toString()}
                      placeholder="skuretailprice"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuretailprice && errors.skuretailprice && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuretailprice}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Features</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skufeatures")}
                      value={values.skufeatures}
                      placeholder="skufeatures"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skufeatures && errors.skufeatures && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skufeatures}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Name_enGB</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skuname_enGB")}
                      value={values.skuname_enGB}
                      placeholder="skuname_enGB"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skuname_enGB && errors.skuname_enGB && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skuname_enGB}
                    </Text>
                  )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Short Description_enGB</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skushortdescription_enGB")}
                      value={values.skushortdescription_enGB}
                      placeholder="skushortdescription_enGB"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skushortdescription_enGB &&
                    errors.skushortdescription_enGB && (
                      <Text className="text-red-500 text-sm font-semibold text-left">
                        {errors.skushortdescription_enGB}
                      </Text>
                    )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Description_enGB</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skudescription_enGB")}
                      value={values.skudescription_enGB}
                      placeholder="skudescription_enGB"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skudescription_enGB &&
                    errors.skudescription_enGB && (
                      <Text className="text-red-500 text-sm font-semibold text-left">
                        {errors.skudescription_enGB}
                      </Text>
                    )}
                </View>

                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Numbers On Parts</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skunumbersonparts")}
                      value={values.skunumbersonparts}
                      placeholder="skunumbersonparts"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skunumbersonparts && errors.skunumbersonparts && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skunumbersonparts}
                    </Text>
                  )}
                </View>
                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Altcode</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skualtcode")}
                      value={values.skualtcode}
                      placeholder="skualtcode"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skualtcode && errors.skualtcode && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skualtcode}
                    </Text>
                  )}
                </View>
                <View className="wrapper  bg-white shadow p-2 rounded">
                  <Text>SKU Path</Text>
                  <View className=" flex-row py-3 px-2 bg-gray-200 rounded-md mt-1">
                    <TextInput
                      onChangeText={handleChange("skupath")}
                      value={values.skupath}
                      placeholder="skupath"
                      className="border-b-2 border-gray-200 w-full  text-[16px]"
                    />
                  </View>
                  {touched.skupath && errors.skupath && (
                    <Text className="text-red-500 text-sm font-semibold text-left">
                      {errors.skupath}
                    </Text>
                  )}
                </View>


                <View>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    type="onSubmit"
                    className="rounded-md w-full bg-amber-400 py-3"
                  >
                    <Text className="text-xl font-semibold text-white text-center">
                      Submit Product Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ManageProductScreen;
