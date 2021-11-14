@isTest
public class TestContactController {
   
    static {
       Contact contact1 = new Contact(
            FirstName = 'Alex', 
            LastName = 'Danilas',
            Email = 'alex@edge.com',
            MobilePhone = '(512) 757-9340'
        );
        Contact contact2 = new Contact(
            FirstName = 'Mike', 
            LastName = 'Shinoda',
            Email = 'mike@edge.com',
            MobilePhone = '(367) 757-9341'
        );
        
        Database.insert(new List<Contact> {contact1, contact2});
    }
    
    @isTest
    static void testContactsSize() {  
        
        Test.startTest();
        List<Contact> contacts = ContactController.getContacts('');
        Test.stopTest();
        
        System.assertEquals(2, contacts.size());
    }
    
    @isTest
    static void testContactFields() {  
        
        Test.startTest();
        List<Contact> contacts = ContactController.getContacts('');
        Test.stopTest();
        
        Contact contact1 = contacts.get(0);
        
        System.assertEquals('Alex', contact1.FirstName);
        System.assertEquals('Danilas', contact1.LastName);
        System.assertEquals('alex@edge.com', contact1.Email);
        System.assertEquals('(512) 757-9340', contact1.MobilePhone);
    }
    
    @isTest
    static void testContactFieldsByName() {  
        
        String name = 'Alex';
        Test.startTest();
        List<Contact> contacts = ContactController.getContacts(name);
        Test.stopTest();
        
        System.assertEquals(1, contacts.size());
        Contact contact1 = contacts.get(0);
        
        System.assertEquals('Alex', contact1.FirstName);
        System.assertEquals('Danilas', contact1.LastName);
        System.assertEquals('alex@edge.com', contact1.Email);
        System.assertEquals('(512) 757-9340', contact1.MobilePhone);
    }
}