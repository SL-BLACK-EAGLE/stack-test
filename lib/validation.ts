import * as Yup from 'yup';


export const oemSchema = Yup.object().shape({
    skuid: Yup.number()
        .min(1)
        .required('Required'),
    name: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    partnumbers: Yup.string().min(6),
    keywords: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export const machineTypeSchema = Yup.object().shape({
    skuid: Yup.number()
        .min(1)
        .required('Required'),
    name: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(10, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    model: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export const manufacturerSchema = Yup.object().shape({
    skuid: Yup.number()
        .min(1)
        .required('Required'),
    name: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    partnumbers: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    keywords: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});


export const productSchema = Yup.object().shape({
    skuid: Yup.number().min(1).required(),
    skunumber: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    skuprice: Yup.number()
        .min(4, 'Too Short!')
        .max(10000, 'Too Long!')
        .required('Required'),
    skuenabled: Yup.boolean(),
    skuqtyonorder: Yup.number()
        .min(1, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    skuavailableindays: Yup.number(),
    skuimageurl: Yup.string(),
    skuweight: Yup.number()
        .min(1, 'Too Short!')
        .max(10000, 'Too Long!'),
    skuavailableitems: Yup.number()
        .min(4, 'Too Short!'),
    skulastmodified: Yup.date(),
    skucreated: Yup.date(),
    skuretailprice: Yup.number(),
    skufeatures: Yup.string(),
    skuname_enGB: Yup.string(),
    skushortdescription_enGB: Yup.string(),
    skudescription_enGB: Yup.string(),
    skunumbersonparts: Yup.string(),
    skualtcode: Yup.string(),
    skupath: Yup.string(),
});

