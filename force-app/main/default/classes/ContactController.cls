public with sharing class ContactController {
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(String name){
        String key = '%' + name + '%';
        
        return [
            SELECT Id, FirstName, LastName, Email, Account.Name, MobilePhone, CreatedDate 
            FROM Contact 
            WHERE FirstName LIKE :key
            ];
    }
}