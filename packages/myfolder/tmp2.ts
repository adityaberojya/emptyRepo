let str = `description:
  is_a: AdityaProp
  labelEN: AdityaDesc
  labelPT: Adilabel

relevance:
  is_a: AnnotationProperty
  domain: Indicator
  labelEN: relevance
  labelPT: relevância

title:
  is_a: AnnotationProperty
  labelPT: título
  labelEN: title
  range: Literal
`


          let yaml = require('yaml')
          let doc = yaml.parse(str)

          console.log(doc)