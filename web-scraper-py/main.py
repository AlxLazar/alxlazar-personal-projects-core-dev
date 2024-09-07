import json

from selenium import webdriver

with open('/home/alxlazar/Projects/alxlazar-personal-projects-core-dev/web-scraper-py/site_db.json') as data_file:
    data = json.load(data_file)
    
    for productKey, productData in data.items():
        print(productKey)
        minItem = ""
        minPrice = 100.0
        for siteName, siteData in productData.items():
            print(f"  {siteName}")
            driver = webdriver.Firefox()
            driver.get(siteData['url'])

            path = siteData['price_xpath']
            priceTemp = driver.find_element('xpath', path)
            price = eval(siteData['price'])

            if(float(price) < float(minPrice)):
                minPrice = price
                minItem = siteName
            print(f"    {price}")

            driver.quit()
        print(f"Best price for {productKey} is {minPrice} lei on {minItem}")